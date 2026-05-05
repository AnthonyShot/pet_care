'use client';

export function BookingForm() {
  const defaultArrivalTime = (() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}T09:30`;
  })();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert('预约信息已记录，门店会尽快联系您。');
  }

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
            <label>期望到店日期
              <input type="datetime-local" name="time" defaultValue={defaultArrivalTime} />
            </label>
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
