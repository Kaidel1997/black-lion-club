const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.addEventListener('keydown', e => { if(e.key === 'Escape'){ menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); } });
function filterSchedule(type){ document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.filter === type))); document.querySelectorAll('[data-type]').forEach(r => r.hidden = type !== 'all' && r.dataset.type !== type); }
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click',()=>filterSchedule(b.dataset.filter)));
document.querySelectorAll('[data-choice]').forEach(a => a.addEventListener('click',()=>filterSchedule(a.dataset.choice)));
const photos = [[21,'Команда Black Lion'],[20,'Тренировка в клубе'],[22,'Поединок на соревнованиях'],[1,'Участник клуба с длинным мечом'],[4,'Сабельный поединок'],[5,'Работа в паре'],[6,'Соревнования по рапире'],[7,'Техника рапиры'],[8,'Алексей Можаров'],[11,'На фехтовальной дорожке'],[12,'Клубная форма Black Lion'],[13,'Групповая тренировка'],[14,'Поединок на длинных мечах'],[15,'Олег Колганов'],[16,'Отработка техники'],[17,'Поединок на соревнованиях'],[18,'Сабли на дорожке'],[19,'Фехтовальный турнир'],[23,'Кирилл Каминский'],[24,'Тренировка с саблей']];
const lightbox = document.querySelector('#lightbox');
let lastPhotoButton;
photos.forEach(([id, caption],i)=>{const button=document.createElement('button');button.setAttribute('aria-label','Открыть фото: '+caption);const img=document.createElement('img');img.src=`assets/originals/${String(id).padStart(2,'0')}.jpg`;img.alt=caption;img.loading='lazy';img.width=800;img.height=600;button.append(img);button.addEventListener('click',()=>{lastPhotoButton=button;lightbox.querySelector('img').src=img.src;lightbox.querySelector('img').alt=caption;lightbox.querySelector('p').textContent=caption;lightbox.showModal();});document.querySelector(i<3?'#gallery':'#extra-photos').append(button);});
document.querySelector('#more-photos').addEventListener('click',e=>{const b=e.currentTarget;const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));document.querySelector('#extra-photos').hidden=!open;b.textContent=open?'Свернуть фотографии −':'Все фотографии +';});
lightbox.querySelector('.close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
lightbox.addEventListener('close',()=>lastPhotoButton?.focus());
