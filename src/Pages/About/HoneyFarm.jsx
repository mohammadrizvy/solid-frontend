import React from "react";

const HoneyFarm = () => {
  const farms = [
    {
      id: 1,
      image:
        "/public/HoneyFarm/01919899409-15-mqjsq1t4mr2qzzqunobu02x4lq257eemg9vl8tpbq8.jpg", // Add the relative path to the image in the public folder
      description:
        " মৌমাছি চাষের বাক্সকে মৌবাঙ্র বলা হয় । এই মৌবাঙ্র বিভিন্ন অংশের সমন্বয়ে তৈরী। তলার কাঠ, বাচ্চাঘর, মধুঘর, ঢাকনা, ও ছাদ হচ্ছে একটি মৌবাঙ্রের বিভিন্ন অংশ। মধুঘর ও বাচ্চাঘরে সারি সারি কাঠের ফ্রেম সাজিয়ে দেয়া হয়। এ ফ্রেমেই মৌমাছিরা চক তৈরি করে।",
    },
    {
      id: 2,
      image:
        "/public/HoneyFarm/banner-image-2-mq6vtfsp35x0i8lvpolpq08pf8oqfs7vpqlnir8sdc.jpg", // Add the relative path to the image in the public folder
      description: "মৌবাঙ্র থেকে ফ্রেম বের করা হচ্ছে ।",
    },
    {
      id: 3,
      image:
        "/public/HoneyFarm/DSCN9537-scaled-ot2q892qf1074tno3uw85iasje6j4tugbi5h976zkw.jpg", // Add the relative path to the image in the public folder
      description:
        "মৌবাঙ্র থেকে বের করা ফ্রেম । এই ফ্রেমের মধ্যেই শ্রমিক মৌমাছিরা মধু সংরক্ষণ করে ।",
    },
    {
      id: 4,
      image:
        "/public/HoneyFarm/DSC04843-scaled-ot2q9nu0o2xojrlxvgu2w5hom78cohfyihdp653q8w.jpg", // Add the relative path to the image in the public folder
      description: "ধোয়া তৈরি করে ফ্রেম থেকে মৌমাছি সরানোর চিত্র ।",
    },
    {
      id: 5,
      image:
        "/public/HoneyFarm/01926877620-mqjsquy4im6mzwkixix9ndkf0o2iu0mawa3n4ei4dc.jpg", // Add the relative path to the image in the public folder
      description:
        "মৌচাক থেকে মধু সংগ্রহ করার এনালগ মেশিন । মৌবাঙ্রে থেকে ফ্রেম সংগ্রহ করে মেশিনের ভিতর সারি সারি করে সাজানো হয় ।সাজানো শেষে উপরের হুইল ঘুরালেই একপ্রান্ত দিয়ে মধু আলাদা মধু রাখার পাত্রে সংরক্ষিত হয় ।",
    },
    {
      id: 6,
      image:
        "/public/HoneyFarm/12540586_439983469529554_6122740562458147027_n-mpd9njzlti0fjifnyeiel1hksm3szdsv11xarug1b4.jpg", // Add the relative path to the image in the public folder
      description: "মেশিন থেকে মধু  বের হয়ে আলাদা পাত্রে সংরক্ষিত হচ্ছে ।",
    },
    {
      id: 7,
      image:
        "/public/HoneyFarm/DSCN9178-scaled-ot2q8o45gdksal1to1e99ei61k4ejzi5pkl8xmkotc.jpg", // Add the relative path to the image in the public folder
      description:
        "সারি করে সাজানো মৌবাঙ্র পরিদর্শনে এসেছে বিটিভির প্রতিবেদক টিম ।",
    },
    {
      id: 8,
      image:
        "/public/HoneyFarm/DSCN9924-scaled-ot2qaiuoxm456wcvuc8rofnw7wzgqhv3mqwq09tqjk.jpg", // Add the relative path to the image in the public folder
      description: "সংগৃহিত মধু পরিশোধনাগারে নিয়ে যাওয়া হচ্ছে ।",
    },
    {
      id: 9,
      image:
        "/public/HoneyFarm/F2FTraining_SolidHoney-13-ov9azh5dzjr0imb8x6zmc8shb3bmoxml12ecu13b8g.jpg", // Add the relative path to the image in the public folder
      description: "উন্নত প্রযুক্তিতে মধু পরিশোধন করা হচ্ছে ।",
    },
    {
      id: 10,
      image:
        "/public/HoneyFarm/F2FTraining_SolidHoney-34-ov9b9nqg0xouajirglg4coa8zd4s2w1wfgtpzxzrts.jpg", // Add the relative path to the image in the public folder
      description: "পরিশোধিত মধুর গুণগত মান পরীক্ষা করা হচ্ছে ।",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">
        আমাদের নিজস্ব মৌ খামারের কিছু স্থির চিত্র{" "}
      </h2>
      <p className="text-sm mb-4 text-gray-600">
        প্রাকৃতিক মেডিসিন মধু উৎপাদন এবং সংরক্ষণের অনেক গুলি ধাপ রয়েছে । সঠিক
        উপায়ে উৎপাদন, সংগ্রহ এবং সংরক্ষণ না করতে পারলে মধুর গুণগত মান অক্ষুন্ন
        থাকে না । গুণগত মান নিশ্চিত করতে আমরা সনাতন এবং উন্নত প্রযুক্তির সমন্নয়ে
        মধু উৎপাদান ,সংগ্রহ এবং সংরক্ষণ করে থাকি । যার ফলে আমাদের উৎপাদিত মধুর
        সম্পূর্ণ গুণাগুণ অক্ষুন্ন থাকে । ১ম ধাপে রাণী মৌমাছি সংগ্রহ করে শ্রমীক
        মৌমাছিদের দিয়ে মৌবাঙ্রের ভিতরে থাকা কাঠের ফ্রেমে মধু সংগ্রহ করানো হয় ।
        নির্দিষ্ট দিন শেষে মৌবাঙ্রার থেকে মধুযুক্ত ফ্রেমগুলি সংগ্রহ করে ধোয়া
        তৈরি করে ফ্রেম থেকে মৌমাছি সরানো হয় । পরবর্তিতে এনালগ মেশিনের ভিতরে সারি
        সারি সাজানো হয় । এরপর হুইল ঘুরালেই ফ্রেম থেকে মধুগুলি আলাদা হয়ে পাইপের
        মাধ্যমে একটি নির্দিষ্ট পাত্রে জমা হয় । সংগৃহিত মধু গুলো পরিশোধনের জন্য
        সলিড হানির ল্যাবে নিয়ে আসা হয় । সেখানে উন্নত প্রযুক্তিতে পরিশোধন শেষে
        ১০০% গুণগত মান নিশ্চিত করে সলিড হানি বাজারজাত করা হয়{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {farms.map((media) => (
          <div key={media.id} className="text-center">
            <div className="w-full h-70 bg-gray-300 rounded-lg mb-4">
              <img
                src={media.image}
                alt={media.description}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600">{media.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoneyFarm;
