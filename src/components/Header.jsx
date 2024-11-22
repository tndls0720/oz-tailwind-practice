export default function Header() {
  return (
    <header className="flex justify-between items-center px-[20px] py-[10px] bg-black">
      <h2 className="font-bold text-2xl">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-10" >
        <li className="text-[13px] list-none font-normal">로그인</li>
        <li className="text-[13px] list-none font-normal">회원가입</li>
        <li className="text-[13px] list-none font-normal">내클래스</li>
      </ul>
    </header>
  );
}
