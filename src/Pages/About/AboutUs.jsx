import React from "react";

const AboutUs = () => {
  const awards = [
    {
      id: 1,
      image: "/public/Certified/jjjjjlll-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "বাংলাদেশ ক্ষুদ্র ও কুঠির শিল্প করপোরেশন ( বিসিক ) আয়োজিত মহান স্বাধীনতা দিবস মেলা 2018 মেলায় অংশগ্রনের স্বীকৃতি স্বরূপ সলিড হানিকে সম্মাননা স্বারক ।",
    },
    {
      id: 2,
      image: "/public/Certified/2260-1-724x1024-01-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "বাংলাদেশ ক্ষুদ্র ও কুঠির শিল্প করপোরেশন ( বিসিক ) আয়োজিত মহান বিজয় দিবস মেলা 2017 মেলায় অংশগ্রহনের স্বীকৃতি স্বরূপ সলিড হানিকে সম্মননা স্বারক ।",
    },
    {
      id: 3,
      image: "/public/Certified/মহান-স্বাধীনতা-দিবস-মেলা-2017-01.jpg", // Add the relative path to the image in the public folder
      description:
        "বাংলাদেশ ক্ষুদ্র ও কুঠির শিল্প করপোরেশন ( বিসিক ) আয়োজিত মহান স্বাধীনতা দিবস মেলা 2017 মেলায় অংশগ্রহনের স্বীকৃতি স্বরূপ সলিড হানিকে সম্মাননা স্বারক ।",
    },
    {
      id: 4,
      image: "/public/Certified/2260-1-724x1024-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "সমবায় খুলনা বিভাগ আয়োজিত সমবায়ীদের উৎপাদিত পণ্য মেলা 2018 মেলায় সলিড হানিকে শুভেচ্ছা স্বারক ।",
    },
    {
      id: 5,
      image: "/public/Certified/lkj-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "কৃষি সম্প্রসারণ অধিদপ্তর কৃষি মন্ত্রনালয় আয়োজিত জাতীয় মৌ মেলা 2020 মেলায় সলিড হানিকে সম্মাননা স্বারক ।",
    },
    {
      id: 6,
      image: "/public/Certified/2-01.jpg", // Add the relative path to the image in the public folder
      description:
        "এস এম ই ফাউন্ডেশনের আয়োজনে এস এম ই পণ্য মেলা 2019 মেলায় সলিড হানিকে বিশেষ পুরস্কার ৬ষ্ঠ সম্মাননা দেয়া হয় ।",
    },
    {
      id: 7,
      image: "/public/Certified/258-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "এম এম ই ফাউন্ডেশন খুুলনা জেলার প্রশাসনের আয়োজনে এস এম ই মেলা 2018 সলিড হানিকে বিশেষ সম্মাননা স্বারক ।",
    },
    {
      id: 8,
      image: "/public/Certified/জাতীয়-মৌ-মেলা-2019-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "কৃষি সম্প্রসার অধিদপ্তর (কৃষি মন্ত্রনালয় আয়োজিত ) মৌ মেলা 2019 মেলায় সলিড হানিকে ৩য় পুরস্কারে ভূষিত করা হয় ।",
    },
    {
      id: 9,
      image: "/public/Certified/জাতীয়-মৌ-মেলা-2016-01.jpg", // Add the relative path to the image in the public folder
      description:
        "বাংলাদেশ ক্ষুদ্র ও কুঠির শিল্প করপোরেশন আয়োজিত মধু মেলা 2016 মেলায় সলিড হানিকে সম্মাননা স্বারক।",
    },
    {
      id: 10,
      image: "/public/Certified/জাতীয়-মৌ-মেলা-2018-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "কৃষি সম্প্রসারণ অধিদপ্তর ( কৃষি মন্ত্রনালয় ) আয়োজিত জাতীয় মৌ মেলা 2018 মেলায় সলিড হানিকে ২য় পুরস্কারে প্রদান করা হয় ।",
    },
    {
      id: 11,
      image: "/public/Certified/llol-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "১ম পুরস্কার ভ্রাম্যমাণ প্রশিক্ষণ জেলা সমবায় কার্যালয়,  খুলনা ।",
    },
    {
      id: 12,
      image: "/public/Certified/depodil-university-01.jpg", // Add the relative path to the image in the public folder
      description:
        "বিসিক এবং ডেফোডিল ইন্টারনেশনাল ইউনিভার্সিটি আয়োজিত মৌ মেলা 2017 মেলায় সলিড হানিকে সম্মাননা স্বারক ।",
    },
    {
      id: 13,
      image: "/public/Certified/daraz-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "অনলাইন ইকমার্স ফ্লাটপর্ম দারাজ এর পক্ষ থেকে সলিড হানিকে সম্মাননা ।",
    },
    {
      id: 14,
      image: "/public/Certified/jjjjjjj-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description: "NaN",
    },
    {
      id: 15,
      image: "/public/Certified/মধু-টেষ্ট-রিপোর্ট-01.jpg", // Add the relative path to the image in the public folder
      description:
        "ডেফোডিল ইন্টারনেশনাল ইউনিভার্সিটি  এর ডিপার্টমেন্ট অপ নিউট্রেশন এন্ড ফুড ইঞ্জিনিয়ারিং কর্তৃক মধু টেষ্ট রিপোর্ট ।",
    },
    {
      id: 16,
      image: "/public/Certified/kkkkkkkkk-01-1024x1024.jpg", // Add the relative path to the image in the public folder
      description:
        "ডেফোডিল ইন্টারনেশনাল ইউনিভার্সিটি  এর ডিপার্টমেন্ট অপ নিউট্রেশন এন্ড ফুড ইঞ্জিনিয়ারিং কর্তৃক মধু টেষ্ট রিপোর্ট ।",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">
        আমাদের পণ্য সার্টিফিকেশন পুরষ্কার
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {awards.map((award) => (
          <div key={award.id} className="text-center">
            <div className="w-full h-56 bg-gray-300 rounded-lg mb-4">
              <img
                src={award.image}
                alt={award.description}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
