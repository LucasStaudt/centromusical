import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    instrument: '',
    objective: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Me chamo ${formData.name}, tenho interesse em aulas de ${formData.instrument}. ${formData.objective}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = formData.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/55${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', whatsapp: '', instrument: '', objective: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
        style={{
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
        }}
      />

      <input
        type="tel"
        name="whatsapp"
        placeholder="WhatsApp (com DDD)"
        value={formData.whatsapp}
        onChange={handleChange}
        required
        style={{
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
        }}
      />

      <select
        name="instrument"
        value={formData.instrument}
        onChange={handleChange}
        required
        style={{
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <option value="">Selecione um instrumento</option>
        <option value="Bateria">Bateria</option>
        <option value="Violão">Violão</option>
        <option value="Guitarra">Guitarra</option>
        <option value="Baixo">Baixo</option>
        <option value="Piano/Teclado">Piano/Teclado</option>
        <option value="Canto">Canto</option>
      </select>

      <textarea
        name="objective"
        placeholder="O que gostaria de aprender? (opcional)"
        value={formData.objective}
        onChange={handleChange}
        rows={3}
        style={{
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
          resize: 'vertical',
        }}
      />

      <button type="submit" className="btn-primary">
        Enviar via WhatsApp
      </button>
    </form>
  );
}
