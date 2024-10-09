import React from "react";

const FairCampaing = () => {

  const farms = [
    {
      id: 1,
      image: "/public/Fair/DSC0680-1536x1020.jpg", // Add the relative path to the image in the public folder
      description:
        "স্টল পরিদর্শনে এসেছেন আইন শৃঙ্খলা বাহিনীর সম্মানিত সদস্যরা ।",
    },
    {
      id: 2,
      image: "/public/Fair/DSC0701-1536x1020.jpg", // Add the relative path to the image in the public folder
      description: "আমাদের স্টলে সম্মানিত ক্রেতারা ।",
    },
    {
      id: 3,
      image: "/public/Fair/DSC0878-1536x1020.jpg", // Add the relative path to the image in the public folder
      description: "শুভেচ্ছা পুরস্কার গ্রহনের মুহূর্তে ।",
    },
    {
      id: 4,
      image: "/public/Fair/DSC0879-1536x1020.jpg", // Add the relative path to the image in the public folder
      description: "শুভেচ্ছা পুরস্কার গ্রহনের মুহূর্তে ।",
    },
    {
      id: 5,
      image: "/public/Fair/DSC4669-1536x1020.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির স্টলে বিদেশি ক্রেতার সাথে ।",
    },
    {
      id: 6,
      image: "/public/Fair/DSC00180-1536x1029.jpg", // Add the relative path to the image in the public folder
      description: "মৌ মেলা ২০১৮ এর পুরস্কার বিতরণী অনুষ্ঠানে ।",
    },
    {
      id: 7,
      image:
        "/public/Fair/DSC00216-scaled-ovg4ocst2qhwdhg74a3bi8py79sum0f6dgmpuini5c.jpg", // Add the relative path to the image in the public folder
      description: "মৌ মেলা ২০১৮ এর প্রবেশদ্বার ।",
    },
    {
      id: 8,
      image:
        "/public/Fair/DSC00231-scaled-ovg4pfc6uxynlhw7v8r0ugzuk2iwdlo66rdmiv2d28.jpg", // Add the relative path to the image in the public folder
      description: "সলিড মধুর স্টল ।",
    },
    {
      id: 9,
      image:
        "/public/Fair/DSC00241-scaled-ovg4tw2lbm2oqteqso886ufo4yinxue9suxnl6g1i8.jpg", // Add the relative path to the image in the public folder
      description: "সলিড মধুর স্টলে সাবেক কৃষিমন্ত্রি বেগম মতিয়া চৌধুরী ।",
    },
    {
      id: 10,
      image:
        "/public/Fair/DSC00285-scaled-ovg4y0l3bfpzp7f0pgfa4syhzu6nq0rv1a0dewbu74.jpg", // Add the relative path to the image in the public folder
      description: "ক্রেতাগণ ।",
    },
    {
      id: 11,
      image:
        "/public/Fair/DSC00286-scaled-ovg53u73nhoxm8yjph132u2agrhieiw063hnflp1nk.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানিতে ক্রেতাগণ ।",
    },
    {
      id: 12,
      image:
        "/public/Fair/DSC00294-scaled-ovg5557157h9qr2a31cfji7c611v3e2l0k3xffrd0g.jpg", // Add the relative path to the image in the public folder
      description: "সলিড মধুতে ক্রেতাগণ ।",
    },
    {
      id: 13,
      image:
        "/public/Fair/DSC00543-1-scaled-ovg56cflvl4gktbh2k19q7ajhr4qxgu8ii49i5z928.jpg", // Add the relative path to the image in the public folder
      description: "মন্ত্রী মহোদয়ের সাথে ।",
    },
    {
      id: 14,
      image:
        "/public/Fair/DSC00544-scaled-ovg5a4q7ekb1c9thyoy69qwdmmgyxkvbd8po3ad600.jpg", // Add the relative path to the image in the public folder
      description: "সলিড মধুতে ক্রেতাগণ ",
    },
    {
      id: 15,
      image:
        "/public/Fair/DSC00553-scaled-ovg5bijngs78flt4vshefwbt41nf9jd383aeiybau8.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানি স্টল ।",
    },
    {
      id: 16,
      image:
        "/public/Fair/DSC00588-scaled-ovg5d3vt1odq3thukz9n5zuxcjstb2oprz30styaao.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির স্টলে গণমাধ্যম কর্মীরা ।",
    },
    {
      id: 17,
      image:
        "/public/Fair/DSCN0011-scaled-ovg5f3bjh33im6m2zu5afhtyhu0pk2kbdsnx9v0d5s.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির স্টলে প্রতিষ্ঠাতা ।",
    },
    {
      id: 18,
      image:
        "/public/Fair/DSCN9799-scaled-ovg5gcfsl4ta3gsjodndr6g30bubtjjfjzz8b55gv4.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির বিদেশি স্টলে বিদেশি ক্রেতাদের ভিড় ।",
    },
    {
      id: 19,
      image:
        "/public/Fair/DSCN9804-scaled-ovg5hhsoxudwab4gyviysw0d5a6h883mdoolfbg59c.jpg", // Add the relative path to the image in the public folder
      description: "বিদেশে সলিড হানির মেলায় বিদেশি ক্রেতা ।",
    },
    {
      id: 20,
      image:
        "/public/Fair/DSCN9805-scaled-ovg5ivm502a3dn43vz26z1fsmpcxk6le8j9buzea3k.jpg", // Add the relative path to the image in the public folder
      description: "মেলায় আগত বিদেশি ক্রেতারা সলিড হানির স্টল ঘুরে দেখছেন ।",
    },
    {
      id: 21,
      image:
        "/public/Fair/DSCN9809-scaled-ovg5kc93msa5fszncltauo5lwa5hj8ed3rsiqh88f4.jpg", // Add the relative path to the image in the public folder
      description: "মেলায় আগত বিদেশি ক্রেতারা সলিড হানির স্টল ঘুরে দেখছেন ।",
    },
    {
      id: 22,
      image:
        "/public/Fair/DSCN9810-scaled-ovg5lurqn6cs56sgi9dnvaeccmorxoesn9mokizee8.jpg", // Add the relative path to the image in the public folder
      description: "মেলায় আগত বিদেশি ক্রেতারা সলিড হানির স্টল ঘুরে দেখছেন ।",
    },
    {
      id: 23,
      image:
        "/public/Fair/DSCN9812-scaled-ovg5nt9mvr1abxy22luokalwwj1ayz6nwyk3ka2vfk.jpg", // Add the relative path to the image in the public folder
      description: "নিজের স্টলে বিদেশি ক্রেতার সাথে সলিড হানির প্রতিষ্ঠাতা ।",
    },
    {
      id: 24,
      image:
        "/public/Fair/DSCN9953-scaled-ovg5prrj4bpsip3nmybp9athgfdu09yj6nhik16cgw.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির সম্মানিত ক্রেতা ।",
    },
    {
      id: 25,
      image:
        "/public/Fair/DSCN9978-scaled-ovg5rgv1gk1fhcmwq6qg9deg2h0owlp331w2r0nr8g.jpg", // Add the relative path to the image in the public folder
      description: "২০১৬ তে মৌ মেলায় সলিড হানির স্টলে ।",
    },
    {
      id: 26,
      image:
        "/public/Fair/DSC00702-scaled-ovg5uytewctup3jyap6gjhm7o3rvk1l48db523h02o.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির স্টলে ।",
    },
    {
      id: 27,
      image: "/public/Fair/DSC00084-1152x1536.jpg", // Add the relative path to the image in the public folder
      description: "সলিড হানির স্টলে ক্ষুদে ক্রেতারা ।",
    },
    {
      id: 28,
      image: "/public/Fair/DSC00126-1152x1536.jpg", // Add the relative path to the image in the public folder
      description: "সলিড মধুতে আস্থা সার্বজনীন ।",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">মেলা প্রচারণা</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
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

export default FairCampaing;
