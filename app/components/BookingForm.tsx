'use client';

const timeSlots = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

function getTodayValue() {
  return new Date().toISOString().split('T')[0];
}

export function BookingForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('预约信息已记录，门店会尽快联系您。');
  }

  const today = getTodayValue();

  return (
    <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>您的称呼
                <input type="text" name="name" placeholder="例如：王女士" required />
              </label>
              <label>联系电话
                <input type="tel" name="phone" placeholder="请输入手机号" required />
              </label>
            </div>
            <div className="form-row">
              <label>宠物类型
                <select name="pet" required>
                  <option value="">请选择</option>
                  <option>狗狗</option>
                  <option>猫咪</option>
                  <option>其他小宠</option>
                </select>
              </label>
              <label>预约服务
                <select name="service" required>
                  <option value="">请选择</option>
                  <option>轻洗护理</option>
                  <option>全套洗护</option>
                  <option>精修造型</option>
                  <option>短时托管</option>
                </select>
              </label>
            </div>
            <div className="arrival-fieldset">
              <span className="fieldset-title">期望到店时间</span>
              <div className="form-row">
                <label>到店日期
                  <input type="date" name="arrivalDate" min={today} required />
                </label>
                <label>到店时间
                  <select name="arrivalTime" required>
                    <option value="">请选择</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </label>
              </div>
              <p className="field-hint">营业时间 10:00 - 21:00，门店会按所选时间确认最终时段。</p>
            </div>
            <label>备注
              <textarea name="note" placeholder="宠物年龄、体重、是否怕吹风、是否有皮肤问题等"></textarea>
            </label>
            <button className="button" type="submit">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
              提交预约
            </button>
          </form>
  );
}
