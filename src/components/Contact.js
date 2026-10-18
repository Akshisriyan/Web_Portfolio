'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './Contact.module.css';

const emptyForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(emptyForm);
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    // No backend: hand the message to the visitor's own email app, pre-filled
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `${form.message}\n\n— ${form.name} (${form.email})`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { }
    };

    return (
        <section className="section section-alt" id="contact">
            <div className="container">
                <SectionHeading
                    align="center"
                    eyebrow="Get in touch"
                    title="Let's work together"
                    subtitle="Have a role, project or idea in mind? I'd love to hear about it."
                />

                <Reveal className={styles.panel}>
                    <aside className={styles.info}>
                        <h3>Contact details</h3>
                        <p>I usually reply within a day or two.</p>

                        <ul className={styles.list}>
                            <li>
                                <span className={styles.infoIcon}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <div className={styles.infoText}>
                                    <small>Email</small>
                                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                </div>
                                <button
                                    type="button"
                                    className={styles.copy}
                                    onClick={copyEmail}
                                    aria-label="Copy email address"
                                >
                                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                                </button>
                            </li>
                            <li>
                                <span className={styles.infoIcon}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <div className={styles.infoText}>
                                    <small>Phone</small>
                                    {profile.phones.map((p) => (
                                        <a key={p.href} href={p.href}>{p.label}</a>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <span className={styles.infoIcon}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <div className={styles.infoText}>
                                    <small>Location</small>
                                    <span>{profile.location}</span>
                                </div>
                            </li>
                        </ul>

                        <div className={styles.socials}>
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                        <span className={styles.live} aria-live="polite">{copied ? 'Email address copied' : ''}</span>
                    </aside>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <label className={styles.field}>
                                <span>Name</span>
                                <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Your name" />
                            </label>
                            <label className={styles.field}>
                                <span>Email</span>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="you@example.com" />
                            </label>
                        </div>
                        <label className={styles.field}>
                            <span>Subject</span>
                            <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" />
                        </label>
                        <label className={styles.field}>
                            <span>Message</span>
                            <textarea name="message" rows={5} value={form.message} onChange={handleChange} required placeholder="Tell me a little about your project or role…" />
                        </label>

                        <div className={styles.submitRow}>
                            <button type="submit" className="btn btn-primary">
                                Send message
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                            <small>Opens your email app with the message ready to send.</small>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
