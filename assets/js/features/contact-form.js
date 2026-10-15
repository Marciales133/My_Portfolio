/** Keep the existing mailto contact workflow isolated to the contact page. */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('company')?.value) return; // honeypot

    const name = document.getElementById('client-name')?.value.trim();
    const email = document.getElementById('client-email')?.value.trim();
    const message = document.getElementById('client-message')?.value.trim();
    if (!name || !email || !message || !form.reportValidity()) {
      alert('Please complete all fields correctly.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Rushell,\n\n${message}\n\nSender Name: ${name}\nSender Email: ${email}`);
    // Configure your actual receiving address here before publishing.
    window.location.href = `mailto:rushellmarciales720@gmail.com?subject=${subject}&body=${body}`;
  });
}
