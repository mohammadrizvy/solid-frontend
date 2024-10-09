import React from "react";

const MediaCoverage = () => {

    const Media = [
      {
        id: 1,
        image:
          "/MediaCoverage/1-মার্চ-2017-মাসিক-সোনামুখ-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "১লা মার্চ ২০১৭ মাসিক সোনামুখ পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 2,
        image:
          "/MediaCoverage/6-ডিসেম্বর-2016-সলিড-হানিকে-নিয়ে-এনটিভির-প্রতিবেদন-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description: "৬ ডিসেম্বর ২০১৬ সলিড হানিকে নিয়ে এনটিভির প্রতিবেদন ।",
      },
      {
        id: 3,
        image:
          "/MediaCoverage/12-মার্চ-2017-দৈনিক-খুলনাঞ্চল-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-01.jpg", // Add the relative path to the image in the public folder
        description:
          "১২ মার্চ ২০১৭ দৈনিক খুলনাঞ্চল পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 4,
        image:
          "/MediaCoverage/14-মার্চ-2017-দৈনিক-ইত্তেফাক-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "১৪  মার্চ ২০১৭ দৈনিক ইত্তেফাক পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 5,
        image:
          "/MediaCoverage/15-মার্চ-2017-দৈনিক-সংগ্রাম-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "১৫ মার্চ ২০১৭ দৈনিক সংগ্রাম পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 6,
        image:
          "/MediaCoverage/19-ফেব্রুয়ারী-2017-দৈনিক-প্রবাহ-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-01.jpg", // Add the relative path to the image in the public folder
        description:
          "১৯ ফেব্রুয়ারী ২০১৭ দৈনিক প্রবাহ পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 7,
        image:
          "/MediaCoverage/19-মার্চ-2008-লোকসমাজ-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-01-1-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "১৯ মার্চ ২০০৮ লোকসমাজ পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 8,
        image:
          "/MediaCoverage/26-মে-2008-সলিড-হানিকে-নিয়ে-সমকালের-প্রতিবেদন-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description: "২৬ মে ২০০৮ সলিড হানিকে নিয়ে দৈনিক সমকালের প্রতিবেদন ।",
      },
      {
        id: 9,
        image:
          "/MediaCoverage/28-মার্চ-2017-দৈনিক-সমকাল-পত্রিকায়-সলিড-হানিকে-নিয়ে-প্রতিবেদন-করা-হয়-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "২৮ মার্চ ২০১৭ দৈনিক সমকাল পত্রিকায় সলিড হানিকে নিয়ে প্রতিবেদন করা হয় ।",
      },
      {
        id: 10,
        image:
          "/MediaCoverage/৩-আগস্ট-২০১৬-দৈনিক-স্বাধীন-সংবাদ-পত্রিকাতে-সলিড-মধুকে-নিয়ে-করা-প্রতিবেদন-।-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "৩ আগস্ট ২০১৬ দৈনিক স্বাধীন সংবাদ পত্রিকাতে সলিড মধুকে নিয়ে করা প্রতিবেদন ।",
      },
      {
        id: 11,
        image:
          "/MediaCoverage/৮-জুন-২০১৯-দৈনিক-সংগ্রাম-পত্রিকাতে-সলিড-মধুকে-নিয়ে-করা-প্রতিবেদন-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "৮ জুন ২০১৯ দৈনিক সংগ্রাম পত্রিকাতে সলিড মধুকে নিয়ে করা প্রতিবেদন ।",
      },
      {
        id: 12,
        image:
          "/MediaCoverage/৯-জুন-২০১৯-দৈনিক-মানব-জমিন-পত্রিকাতে-সলিড-হানিকে-নিয়ে-করা-প্রতিবেদন-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "৯ জুন ২০১৯ দৈনিক মানব জমিন পত্রিকাতে সলিড হানিকে নিয়ে করা প্রতিবেদন ।",
      },
      {
        id: 199,
        image: "/MediaCoverage/Screenshot From 2024-10-08 15-13-04.png", // Add the relative path to the image in the public folder
        description:
          "১১ এপ্রিল ২০১৬ দৈনিক দৃষ্টিপাত পত্রিকায় সুন্দর বনের মধু এবং সলিড হানিকে ঘিরে প্রতিবেদন ।",
      },
      {
        id: 13,
        image:
          "/MediaCoverage/১৯-আগষ্ট-২০১৯-ডেইলি-মুসলিম-টাইমস-পত্রিকায়-সলিড-হানিকে-নিয়ে-করা-প্রতিবেদন-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "১১ এপ্রিল ২০১৬ দৈনিক দৃষ্টিপাত পত্রিকায় সুন্দর বনের মধু এবং সলিড হানিকে ঘিরে প্রতিবেদন ।",
      },
      {
        id: 14,
        image:
          "/MediaCoverage/২০-মে-২০১৯-দৈনিক-স্পন্দন-পত্রিকাতে-সলিড-মধুকে-নিয়ে-করা-প্রতিবেদন-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "১৯ আগষ্ট ২০১৯ ডেইলি মুসলিম টাইমস পত্রিকায় সলিড হানিকে নিয়ে করা প্রতিবেদন ।",
      },
      {
        id: 15,
        image:
          "/MediaCoverage/২২-মে-২০১৯-দৈনিক-লোকসমাজ-পত্রিকাতে-সলিড-মধুকে-নিয়ে-করা-প্রতিবেদন-।-01-1024x1024.jpg", // Add the relative path to the image in the public folder
        description:
          "২০ মে ২০১৯ দৈনিক স্পন্দন পত্রিকাতে সলিড মধুকে নিয়ে করা প্রতিবেদন ।-01",
      },
      {
        id: 16,
        image:
          "/MediaCoverage/২৩-মে-২০১৯-দৈনিক-নওয়াপাড়া-পত্রিকায়-সলিড-মধুকে-নিয়ে-করা-প্রতিবেদন-।-01.jpg", // Add the relative path to the image in the public folder
        description:
          "২২ মে ২০১৯ দৈনিক লোকসমাজ পত্রিকাতে সলিড মধুকে নিয়ে করা প্রতিবেদন ।",
      },
      {
        id: 17,
        image: "/MediaCoverage/solid-Honey-Achivement-Image-Design-File-01.jpg", // Add the relative path to the image in the public folder
        description:
          "২৩ মে ২০১৯ দৈনিক নওয়াপাড়া পত্রিকায় সলিড মধুকে নিয়ে করা প্রতিবেদন ।",
      },
    ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">
        মিডিয়া কভারেজে সলিড হানি
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Media.map((media) => (
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

export default MediaCoverage;
