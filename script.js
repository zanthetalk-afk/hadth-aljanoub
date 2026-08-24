const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projects.forEach(project => {
      project.style.display = filter === 'all' || project.dataset.category === filter ? '' : 'none';
    });
  });
});

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const text =
`السلام عليكم، أرغب في الاستفسار عن مشروع جديد.

الاسم: ${data.get('name')}
رقم الجوال: ${data.get('phone')}
نوع المشروع: ${data.get('service')}
التفاصيل: ${data.get('message') || 'لا توجد تفاصيل إضافية'}`;
  window.open(`https://wa.me/966535036114?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
