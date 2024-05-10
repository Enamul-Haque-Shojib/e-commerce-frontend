
// import GoogleMapReact from 'google-map-react';
// import { googleApiKey } from './googleApiKey';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {

    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };


    return (
        <div>
            <h1>Contact us</h1>
            {/* <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
        </div>
    );
};

export default ContactUs;