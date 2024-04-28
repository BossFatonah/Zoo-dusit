import React from 'react';
import './Content.css';

function Content() {
  return (
    <>
      <div className='box'>
        <div className='con-top'>
          <h2 className='name-right'>เสือโคร่ง<br />Tiger</h2><br />
          <img className='lefth' src="https://images.unsplash.com/photo-1602612639468-cd507b1cada9?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tiger" />
          <p>ภาพแสดงช้างที่ยืนอยู่ในท่าเรียบร้อย มีหูที่ใหญ่และงาม และงาช้างกำลังถูกดึงขึ้น มีงาช้างยาวมากขึ้นไปถึงปาก</p>
        </div>
        <div className='con-bottom'>
          <h2 className='name-left'>สิงโต<br />Lion</h2><br />
          <img src="https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tiger" />
          <p>สิงโตเป็นสัตว์ที่มีลักษณะเด่นคือขนสีเหลืองทองและมีลายดำบนลำตัว พวกเขาเป็นสัตว์กลางบนในโภชนาการและมักจะเป็นพฤติกรรมที่เป็นหมู่ นอกจากนี้ยังเป็นสัญลักษณ์ของความเด็ดเดี่ยวและความเสี่ยงในหลายสถานการณ์ด้วย!</p>
        </div>
      </div>
    </>
  )
}

export default Content