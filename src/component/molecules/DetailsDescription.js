import React from "react";
import parse from "html-react-parser";

const DetailsDescription = ({ description }) => {
  const des =
    "<p>শিক্ষাপ্রতিষ্ঠানের শিক্ষা কার্যক্রম বন্ধ রেখে থানা ও ওয়ার্ড আওয়ামী লীগের ত্রিবার্ষিক সম্মেলন হওয়া, সম্মেলনে প্রধান অতিথি হিসেবে উপস্থিত থাকায় লজ্জিত ও বিব্রত শিক্ষামন্ত্রী দীপু মনি। এ জন্য তিনি দুঃখ প্রকাশ করেছেন।</p><p>গতকাল বুধবার রাতে রাজধানীর সেগুনবাগিচায় আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউটে এক অনুষ্ঠানে এ কথা বলেন শিক্ষামন্ত্রী। শিক্ষা মন্ত্রণালয়ের জ্যেষ্ঠ জনসংযোগ কর্মকর্তা এম এ খায়ের এই তথ্য জানান।</p>";
  return <div className="details_description">{parse(description || des)}</div>;
};

export default DetailsDescription;
