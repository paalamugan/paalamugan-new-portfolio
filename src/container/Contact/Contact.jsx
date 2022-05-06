import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';
import { images, socialLinks, sendEmailMessage } from '../../constants';
import { MediaIcon } from '../../components';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message, subject } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    sendEmailMessage(e.target)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success(`
          Thank you for reaching out to me!
          I will get back to you soon.
        `);
      })
      .catch(() => {
        setLoading(false);
        // eslint-disable-next-line no-console
        toast.error('Something went wrong. Please try again.');
      });
  };

  return (
    <>
      <h2 className="head-text">Get In <span>Touch</span></h2>
      <div className="app__contact-container">
        <div className="grid w-full grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="contact_note">
              <div className="mb-5 contact_note_top">
                <h4>Quick Contact</h4>
                <p>
                  Don&apos;t like forms? Send me an
                  <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@paalamugan.com&amp;cc=paalamugan26@gmail.com&amp;su=Need to discuss with Mr. Paalamugan&amp;body=Hi there, I need to talk" target="_blank" className="mail_text" rel="noreferrer">&nbsp;email</a>.&nbsp;😊
                </p>
              </div>
              <div className="mb-5 contact_note_bottom">
                <div className="flex flex-wrap items-start mb-4 contact_info">
                  <span className="mt-1 mr-3 text-primary">
                    <img src={images.gmail} alt="Gmail" width="18" height="18" />
                  </span>
                  <div>
                    <h6>Email</h6>
                    <p>contact@paalamugan.com</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-start mb-4 contact_info">
                  <span className="mt-1 mr-3 text-primary">
                    <img src={images.social} alt="Social Media" width="18" height="18" />
                  </span>
                  <div>
                    <h6>Social Media</h6>
                    <ul className="flex mt-1 list-unstyled">
                      {socialLinks.map((social) => (
                        <li key={social.icon}>
                          <a href={social.url} target="_blank" rel="noreferrer">
                            <MediaIcon icon={social.icon} style={{ color: `var(--${social.icon}-color)` }} />
                          </a>
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap items-start contact_info">
                  <span className="mt-1 mr-3 text-primary">
                    <img src={images.location} alt="Location" width="18" height="18" />
                  </span>
                  <div>
                    <h6>Location</h6>
                    <p>Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            {!isFormSubmitted ? (
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-2 w-100">
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div className="form-group">
                      <label htmlFor="name">Name<span className="text-danger">*</span></label>
                      <input id="name" name="name" type="text" className="form-control input_short " required placeholder="Enter your name" value={name} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email<span className="text-danger">*</span></label>
                      <input id="email" name="email" type="email" className="form-control" required placeholder="Enter your email" value={email} onChange={handleChangeInput} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" type="text" className="form-control" placeholder="Enter your subject" value={subject} onChange={handleChangeInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mesage">
                      Message<span className="text-danger">*</span>
                    </label>
                    <textarea id="mesage" className="form-control" name="message" rows="5" required placeholder="Enter your message" value={message} onChange={handleChangeInput} />
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit" name="submit_message" disabled={loading}>
                  {!loading ? <><FaPaperPlane className="mr-2" /> <span>Send Message</span></> : <><BiLoaderCircle className="mr-2 loading" /><span>Sending...</span></>}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center h-full">
                <h3 className="head-text">
                  Thank you for getting in touch!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__whitebg',
);
