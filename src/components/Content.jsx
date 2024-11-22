export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <img className="w-[300px] rounded-[10px] mb-[3px]"
       src={content.img} alt={content.title} />
      <span className="text-[17px] text-[#d7fa00] border border-[#d7fa00] px-[4px] py-[5px] rounded-[3px]">모집중</span>
      <div className="text-[15px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-[#a0a0a0]">{content.subtitle}</p>
    </div>
  );
}
