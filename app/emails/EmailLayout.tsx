interface EmailLayoutProps {
  title: string;
  children: string;
}

export function EmailLayout({
  title,
  children,
}: EmailLayoutProps) {
  return `
  <div style="
    background:#f4f4f4;
    padding:40px;
    font-family:Arial,Helvetica,sans-serif;
  ">
    <div style="
      max-width:700px;
      margin:auto;
      background:white;
      border-radius:14px;
      overflow:hidden;
      box-shadow:0 10px 25px rgba(0,0,0,.08);
    ">

      <div style="
        background:#111;
        color:white;
        padding:30px;
        text-align:center;
      ">

        <h1 style="
          margin:0;
          color:#D4AF37;
          font-size:30px;
        ">
          Garden Route Epoxy Flooring
        </h1>

        <p style="
          margin-top:8px;
          color:#ddd;
          font-size:18px;
        ">
          ${title}
        </p>

      </div>

      <div style="padding:35px;">

        ${children}

      </div>

      <div style="
        background:#fafafa;
        padding:20px;
        text-align:center;
        font-size:13px;
        color:#777;
      ">

        Garden Route Epoxy Flooring<br/>

        Garden Route, South Africa

      </div>

    </div>
  </div>
  `;
}