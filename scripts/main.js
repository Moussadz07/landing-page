// تفعيل القائمة البسيطة وتبديل السمة وإرسال نموذج (محاكاة)
document.getElementById('year').textContent = new Date().getFullYear();

const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('site-nav');
btnMenu.addEventListener('click', ()=>{
  nav.classList.toggle('open');
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('theme-night');
});

// form submit (محاكاة إرسال)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  status.textContent = 'جاري الإرسال...';
  const data = new FormData(form);
  // محاكاة طلب POST إلى demo-data/contact-sample.json أو endpoint حقيقي
  try{
    await new Promise(r=>setTimeout(r,800));
    status.textContent = 'تم الإرسال. سنرد خلال 24 ساعة.';
    form.reset();
  }catch(err){
    status.textContent = 'حدث خطأ. حاول لاحقاً.';
  }
});
