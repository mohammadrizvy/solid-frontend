import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 space-y-12 text-gray-800">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-700">
          Solid Food Products
        </h1>
        <p className="text-lg italic text-gray-600">
          Nourishing Nature's Bounty!
        </p>
        <p className="text-lg">Unveiling the Essence of Solid Food Products</p>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-bold text-green-700">
          About Solid Food Products
        </h2>
        <p>
          Solid Food Products, located in Khulna, Bangladesh, is a premier
          natural consumer food production company. Founded by Md. Abul Kalam
          Sarder, the company specializes in producing honey, black cumin oil,
          mustard oil, and more.
        </p>
        <p>
          The flagship brands "Solid Honey" and "SOLID" are synonymous with
          trust and natural goodness, offering customers the best of nature's
          bounty.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Product showcase"
          className="mx-auto rounded-lg"
        />
      </section>

      {/* Chairman Statement */}
      <section
        id="chairman-statement"
        className="p-6 bg-white rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Chairman Statement
        </h3>
        <p className="italic">
          "Nourishing lives, one exquisite bite at a time!"
        </p>
        <p>
          As Chairman, I'm thrilled to share our commitment to crafting natural,
          top-quality food items. From our renowned honey to nourishing oils,
          each product reflects our dedication to excellence and authenticity.
        </p>
        <p className="font-semibold text-right">- Md. Abul Kalam Sarder</p>
      </section>

      {/* Business Profile */}
      <section
        id="business-profile"
        className="p-6 bg-gray-100 rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Business Profile
        </h3>
        <ul className="list-disc ml-8">
          <li>Founded: 1983</li>
          <li>Business Type: Manufacturing, Export</li>
          <li>Markets: Bangladesh, India, Japan</li>
          <li>Signature Products: Honey, Black Cumin Oil, Mustard Oil</li>
        </ul>
        <img
          src="https://via.placeholder.com/300"
          alt="Business profile"
          className="mx-auto rounded-lg"
        />
      </section>

      {/* Mission & Vision */}
      <section
        id="mission-vision"
        className="p-6 bg-white rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Mission & Vision
        </h3>
        <div className="space-y-2">
          <p>
            <strong>Mission:</strong> Enrich lives by harnessing the goodness of
            nature with unparalleled quality food products.
          </p>
          <p>
            <strong>Vision:</strong> To lead in promoting holistic well-being
            with natural food products that impact the world.
          </p>
        </div>
      </section>

      {/* Brands & Products */}
      <section
        id="brands-products"
        className="p-6 bg-gray-100 rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Brands & Products
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Solid Honey:</h4>
            <p>
              Signature Product: Sundarbans Wild Honey, Mustard Flower Honey,
              Black Seed Flower Honey.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">SOLID:</h4>
            <p>Signature Product: Mustard Oil, Black Cumin, Black Cumin Oil.</p>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/300"
          alt="Products"
          className="mx-auto rounded-lg"
        />
      </section>

      {/* Production & Sales */}
      <section
        id="production-sales"
        className="p-6 bg-white rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Production & Sales
        </h3>
        <p>
          Our production and sales channels ensure quality and efficiency at
          every step. With 2500 honey boxes and partnerships with external
          factories, we maintain authenticity in our products.
        </p>
        <img
          src="https://via.placeholder.com/300"
          alt="Production process"
          className="mx-auto rounded-lg"
        />
      </section>

      {/* Awards & Recognition */}
      <section
        id="awards-recognition"
        className="p-6 bg-gray-100 rounded-lg shadow space-y-4"
      >
        <h3 className="text-2xl font-semibold text-green-700">
          Awards & Recognition
        </h3>
        <ul className="list-disc ml-8">
          <li>Prime Minister Sheikh Hasina visits Solid Honey Stall, 2019.</li>
          <li>Solid Honey Award at Madhu Mela, 2017.</li>
          <li>Rising Youth Award 2023, received by MD Mr. Hasanul Banna.</li>
        </ul>
        <img
          src="https://via.placeholder.com/300"
          alt="Awards"
          className="mx-auto rounded-lg"
        />
      </section>

      {/* Contact Information */}
      <section id="contact" className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-green-700">Contact Us</h3>
        <p>
          <strong>Address:</strong> Damodar, Fultola (zip 9210), Khulna,
          Bangladesh
          <br />
          <strong>Phone:</strong> +8809696482525 | +880 1919-899409
          <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:info@solidhoneybd.com" className="text-blue-600">
            info@solidhoneybd.com
          </a>
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="http://solidhoneybd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            solidhoneybd.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;