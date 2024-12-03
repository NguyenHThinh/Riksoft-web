const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5349.5761694064195!2d106.711144333243!3d20.852310919436466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7ab638476ca1%3A0xf7480b1701e24bde!2zMzMxIFAuIELDuWkgVGjhu4sgVOG7qyBOaGnDqm4sIMSQw7RuZyBI4bqjaSAxLCBI4bqjaSBBbiwgSOG6o2kgUGjDsm5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1715836255176!5m2!1svi!2s"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
