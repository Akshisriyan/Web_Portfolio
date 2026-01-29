'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className={styles.contact} id="contact" ref={ref}>
            <div className={styles.bgElements}>
                <div className={styles.gradientOrb}></div>
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Get In Touch</span>
                    <h2 className={styles.sectionTitle}>Let&apos;s Work Together</h2>
                    <p className={styles.sectionSubtitle}>
                        Have a project in mind? Let&apos;s create something amazing together!
                    </p>
                </motion.div>

                <div className={styles.contactContent}>
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className={styles.contactDetails}>
                                <h4>Email</h4>
                                <a href="mailto:akshithasriyanjith2000@gmail.com">
                                    akshithasriyanjith2000@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className={styles.contactDetails}>
                                <h4>Phone</h4>
                                <a href="tel:+94713740291">+94 71 374 0291</a>
                                <a href="tel:+94781262610">+94 78 126 2610</a>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className={styles.contactDetails}>
                                <h4>Location</h4>
                                <span>Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.contactForm}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="email">Your Email</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : submitted ? (
                                <span>Message Sent! ✓</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
