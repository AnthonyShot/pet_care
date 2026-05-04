import { BookingForm } from './components/BookingForm';
import { FallbackImage } from './components/FallbackImage';

const customerReviews = [
  {
    initial: '林',
    name: '林女士',
    pet: '柯基',
    text: '我家狗狗胆子小，店员会慢慢安抚，全程没有催促。洗完回家状态很放松，毛也蓬松干净。',
  },
  {
    initial: '周',
    name: '周先生',
    pet: '布偶猫',
    text: '猫咪洗护前会先确认身体情况，接回家耳朵、脚垫和尾巴都处理得很细，照片反馈也很及时。',
  },
  {
    initial: '陈',
    name: '陈女士',
    pet: '比熊',
    text: '造型会先沟通，不会剪得太夸张。圆头修得很自然，朋友都问是不是换了一家更专业的店。',
  },
  {
    initial: '许',
    name: '许先生',
    pet: '金毛',
    text: '大狗吹干最怕敷衍，这次底毛摸起来很干爽，没有潮味。护理师还提醒了换季掉毛的梳理频率。',
  },
  {
    initial: '吴',
    name: '吴女士',
    pet: '英短',
    text: '店里猫狗分区让我安心很多。猫咪回来没有应激躲床底，指甲剪得圆滑，抱起来也香香的。',
  },
  {
    initial: '赵',
    name: '赵女士',
    pet: '雪纳瑞',
    text: '眉毛和胡子修得很有精神，细节比以前去过的店更稳定。预约制不用等太久，这点很加分。',
  },
  {
    initial: '梁',
    name: '梁先生',
    pet: '柴犬',
    text: '洗护前会记录皮肤泛红的位置，洗完还给了观察建议。服务不是只追求好看，真的有在看宠物状态。',
  },
  {
    initial: '何',
    name: '何女士',
    pet: '贵宾',
    text: '每次接回家都能看到护理记录，哪里打结、哪里需要多梳都会说清楚，长期养护特别省心。',
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
          <a className="brand" href="#top" aria-label="泡泡爪宠物洗护店首页">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 14c-1.7.2-3 1.4-3 3 0 1.3 1 2 2.3 2h9.4c1.3 0 2.3-.7 2.3-2 0-1.6-1.3-2.8-3-3-.8-1.2-1.9-2-4-2s-3.2.8-4 2Z"/><circle cx="7" cy="9" r="1.7"/><circle cx="12" cy="7" r="1.9"/><circle cx="17" cy="9" r="1.7"/></svg>
            </span>
            泡泡爪宠物洗护店
          </a>
          <nav aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#pricing">价格</a>
            <a href="#reviews">口碑</a>
            <a href="#booking">联系</a>
          </nav>
          <a className="nav-cta" href="#booking">
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="m9 16 2 2 4-5"/></svg>
            预约洗护
          </a>
        </header>
      
        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="eyebrow">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 8 3 8.5l5 4.2-1.5 6.3L12 15.7l5.5 3.3-1.5-6.3 5-4.2L14.5 8 12 2Z"/></svg>
                温和洗护 · 精修造型 · 门店寄养
              </div>
              <h1 id="hero-title">让毛孩子干净、松软、安心回家</h1>
              <p className="lead">为猫咪和狗狗提供分体洗护、皮毛护理、造型修剪和短时托管。透明消毒流程，预约制接待，减少等待和应激。</p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z"/></svg>
                  立即咨询
                </a>
                <a className="button secondary" href="#pricing">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12V8H4v4M4 8l2-4h12l2 4M6 12v8M18 12v8M4 20h16M9 16h6"/></svg>
                  查看套餐
                </a>
              </div>
              <div className="quick-stats" aria-label="门店数据">
                <div className="stat"><strong>4.9</strong><span>顾客评分</span></div>
                <div className="stat"><strong>30+</strong><span>细节检查</span></div>
                <div className="stat"><strong>1v1</strong><span>预约接待</span></div>
              </div>
            </div>
      
            <div className="hero-visual" aria-hidden="true">
              <div className="spa-carousel">
                <figure className="spa-slide">
                  <FallbackImage src="/assets/paw-day-06.jpg" fallbackSrc="/assets/pet-spa-bathing-suite.svg" alt="高端宠物洗护店洗浴护理区" />
                </figure>
                <figure className="spa-slide">
                  <FallbackImage src="/assets/paw-day-04.jpg" fallbackSrc="/assets/pet-spa-grooming-studio.svg" alt="高端宠物洗护店造型修剪区" />
                </figure>
                <figure className="spa-slide">
                  <FallbackImage src="/assets/paw-day-03.jpg" fallbackSrc="/assets/pet-spa-lounge-reception.svg" alt="高端宠物洗护店接待休息区" />
                </figure>
                <div className="spa-caption">
                  <div>
                    <strong>高端分区洗护环境</strong>
                    <span>洗浴区 / 造型区 / 接待休息区</span>
                  </div>
                  <div className="spa-dots" aria-hidden="true"><i></i><i></i><i></i></div>
                </div>
                <svg className="pet-illustration" viewBox="0 0 520 430" role="img" aria-label="宠物洗护插画">
                  <path d="M107 308c-10 43 23 75 73 75h159c50 0 83-32 73-75l-17-76c-10-45-47-75-90-75h-91c-43 0-80 30-90 75l-17 76Z" fill="#fff8e8"/>
                  <path d="M159 157c-20-47-67-66-93-48-21 15-15 54 19 88 23 23 54 37 73 28 18-9 15-39 1-68Z" fill="#e9b36f"/>
                  <path d="M361 157c20-47 67-66 93-48 21 15 15 54-19 88-23 23-54 37-73 28-18-9-15-39-1-68Z" fill="#e9b36f"/>
                  <path d="M147 193c0-78 51-132 113-132s113 54 113 132-51 142-113 142-113-64-113-142Z" fill="#f7d59a"/>
                  <path d="M190 196c0-18 10-31 24-31s24 13 24 31-10 31-24 31-24-13-24-31ZM282 196c0-18 10-31 24-31s24 13 24 31-10 31-24 31-24-13-24-31Z" fill="#fff"/>
                  <path d="M207 196c0-8 4-14 9-14s9 6 9 14-4 14-9 14-9-6-9-14ZM299 196c0-8 4-14 9-14s9 6 9 14-4 14-9 14-9-6-9-14Z" fill="#243034"/>
                  <path d="M240 239c8-8 32-8 40 0 3 3 2 12-4 17-9 8-23 8-32 0-6-5-7-14-4-17Z" fill="#3c2f2a"/>
                  <path d="M226 277c20 17 48 17 68 0" stroke="#3c2f2a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                  <path d="M158 126c35-36 74-49 102-49s67 13 102 49c-22-73-76-103-102-103S180 53 158 126Z" fill="#fff8e8"/>
                  <path d="M89 300c-22-5-44 9-49 32s11 43 33 48 44-9 49-32-11-43-33-48ZM431 300c22-5 44 9 49 32s-11 43-33 48-44-9-49-32 11-43 33-48Z" fill="#f7d59a"/>
                  <path d="M109 260c-30 0-55-21-55-47 0-19 13-35 32-43 7-3 12-9 14-16 7-28 33-49 64-49 28 0 53 18 62 43" fill="none" stroke="#fff" strokeWidth="24" strokeLinecap="round"/>
                  <path d="M411 260c30 0 55-21 55-47 0-19-13-35-32-43-7-3-12-9-14-16-7-28-33-49-64-49-28 0-53 18-62 43" fill="none" stroke="#fff" strokeWidth="24" strokeLinecap="round"/>
                  <path d="M102 356h316" stroke="#d8b16b" strokeWidth="12" strokeLinecap="round" opacity=".36"/>
                </svg>
              </div>
              <div className="floating-note">
                <strong>今日可约 3 个时段</strong>
                <span>到店前会确认宠物性格、皮肤状态和修剪偏好。</span>
              </div>
            </div>
          </section>
      
          <section className="services" id="services" aria-labelledby="services-title">
            <div className="section-head">
              <h2 id="services-title">门店服务</h2>
              <p>从基础清洁到皮毛护理，每一步都有可见标准，适合日常养护、换季掉毛和出门前整理。</p>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <div className="service-icon"><svg className="icon" viewBox="0 0 24 24"><path d="M4 12h16M7 8h10M8 16h8"/><path d="M6 12c0 4 2.5 7 6 7s6-3 6-7"/></svg></div>
                <h3>基础洗护</h3>
                <p>温水清洁、吹干拉毛、耳眼护理、脚底毛和指甲修剪。</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg className="icon" viewBox="0 0 24 24"><path d="M4 19c3-5 4-9 4-15M12 20c2-4 3-8 3-13M20 19c-1-5-3-9-6-12"/></svg></div>
                <h3>深层养护</h3>
                <p>针对干燥、打结、掉毛季做滋养护理和开结梳理。</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg className="icon" viewBox="0 0 24 24"><path d="m4 4 16 16M20 4 4 20"/><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/></svg></div>
                <h3>造型精修</h3>
                <p>圆头、桃心臀、短毛清爽造型，根据体型和生活习惯设计。</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg className="icon" viewBox="0 0 24 24"><path d="M4 10 12 4l8 6v10H4V10Z"/><path d="M9 20v-6h6v6"/></svg></div>
                <h3>短时托管</h3>
                <p>洗护前后独立休息位，饮水、巡视和状态记录同步给主人。</p>
              </article>
            </div>
          </section>
      
          <section className="process" id="process" aria-labelledby="process-title">
            <div className="section-head">
              <h2 id="process-title">安心流程</h2>
              <p>预约制让每只宠物都有专属时间，减少陌生环境里的等待和紧张。</p>
            </div>
            <div className="steps">
              <div className="step"><span>1</span><h3>到店评估</h3><p>确认年龄、疫苗、皮肤状态、性格和护理禁忌。</p></div>
              <div className="step"><span>2</span><h3>分区洗护</h3><p>猫狗分区，工具一客一消毒，敏感宠物低噪吹干。</p></div>
              <div className="step"><span>3</span><h3>细节整理</h3><p>检查耳朵、脚垫、腹底毛、指甲和毛结位置。</p></div>
              <div className="step"><span>4</span><h3>交付反馈</h3><p>记录本次护理情况，提醒回家观察和下次养护时间。</p></div>
            </div>
          </section>
      
          <section className="pricing" id="pricing" aria-labelledby="pricing-title">
            <div className="section-head">
              <h2 id="pricing-title">洗护套餐</h2>
              <p>价格会根据体型、毛量、打结程度略有调整，预约时会提前说明。</p>
            </div>
            <div className="price-grid">
              <article className="price-card">
                <span className="tag">日常清洁</span>
                <h3>轻洗护理</h3>
                <p>适合短毛、小体型或定期养护宠物。</p>
                <div className="price">¥88 <small>起</small></div>
                <ul className="features">
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>基础洗澡吹干</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>指甲和脚底毛</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>耳眼清洁</li>
                </ul>
                <a className="button secondary" href="#booking">预约</a>
              </article>
              <article className="price-card featured">
                <span className="tag">热门推荐</span>
                <h3>全套洗护</h3>
                <p>适合换季、掉毛明显或需要完整清洁的宠物。</p>
                <div className="price">¥168 <small>起</small></div>
                <ul className="features">
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>基础洗护全项</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>开结梳理</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>护理香氛</li>
                </ul>
                <a className="button" href="#booking">预约</a>
              </article>
              <article className="price-card">
                <span className="tag">造型升级</span>
                <h3>精修造型</h3>
                <p>适合贵宾、比熊、雪纳瑞等需要定期修剪犬种。</p>
                <div className="price">¥238 <small>起</small></div>
                <ul className="features">
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>全套洗护</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>造型沟通</li>
                  <li><svg className="icon" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>局部精修</li>
                </ul>
                <a className="button secondary" href="#booking">预约</a>
              </article>
            </div>
          </section>
      
          <section className="reviews" id="reviews" aria-labelledby="reviews-title">
            <div className="section-head">
              <h2 id="reviews-title">顾客反馈</h2>
              <p>好的洗护不只看照片，还要看宠物回家后的状态、气味、细节和主人是否真的省心。</p>
            </div>
            <div className="review-grid" aria-label="顾客评价轮播">
              <div className="review-track">
                {[...customerReviews, ...customerReviews].map((review, index) => (
                  <article className="review-card" key={`${review.name}-${index}`}>
                    <div className="stars" aria-label="五星评价">★★★★★</div>
                    <p>{review.text}</p>
                    <div className="reviewer">
                      <span className="avatar">{review.initial}</span>
                      <span>{review.name} · {review.pet}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="review-indicators" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking" aria-labelledby="booking-title">
            <div className="booking-copy">
              <h2 id="booking-title">预约到店</h2>
              <p className="lead">留下宠物信息和希望到店时间，门店会尽快联系确认时段、价格和注意事项。</p>
              <div className="contact-list">
                <div className="contact-item"><svg className="icon" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z"/></svg><span>电话：138-0000-6688</span></div>
                <div className="contact-item"><svg className="icon" viewBox="0 0 24 24"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>地址：广州市荔湾区汾水花园</span></div>
                <div className="contact-item"><svg className="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>营业：周一至周日 10:00 - 21:00</span></div>
              </div>
              <figure className="location-map">
              <img src="/assets/fenshui-pet-shop-map.svg" alt="广州市荔湾区汾水花园宠物店位置地图" />
                <figcaption>门店位于广州市荔湾区汾水花园，茶滘路附近，到店前建议先确认预约时段。</figcaption>
              </figure>
            </div>
      
            <BookingForm />
          </section>
        </main>
      
        <footer>
          <span>© 2026 泡泡爪宠物洗护店</span>
          <span>温和洗护，认真对待每一次摇尾巴和呼噜声。</span>
        </footer>
    </>
  );
}
