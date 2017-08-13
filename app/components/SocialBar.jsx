// Libs
import React          from 'react';
import firebase       from 'firebase';
import PropTypes      from 'prop-types';
// Files

export default class SocialBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----SocialBar");
    }

    render() {
        return (
            <div className={
                    this.props.contactIsOpen ?
                        "social-bar contact-open"
                    :
                        this.props.navIsOpen ?
                            "social-bar"
                        :
                            "social-bar remove"}>
                <a
                    className="social-button"
                    href="https://www.facebook.com/public/Afika-Nyati"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="facebook-icon"
                        x="0px"
                        y="0px"
                    	width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                        <path fill="#FFFFFF" d="M13.118,16.353c1.771,0,3.479,0,5.311,0c0-1.783-0.035-3.465,0.01-5.144c0.039-1.453,0.012-2.934,0.29-4.348
                    	c0.653-3.322,2.828-5.322,6.027-6.184c4.002-1.079,8.094-0.453,12.236-0.633c0,3.055,0,5.977,0,9.045c-1.595,0-3.144-0.001-4.692,0
                    	c-0.464,0-0.929-0.01-1.393,0.01c-1.124,0.048-1.739,0.579-1.776,1.716c-0.058,1.787-0.015,3.577-0.015,5.503
                    	c2.64,0,5.236,0,8.025,0c-0.267,2.958-0.52,5.762-0.784,8.693c-2.471,0-4.806,0-7.238,0c0,8.383,0,16.628,0,24.98
                    	c-3.584,0-7.067,0-10.648,0c0-8.28,0-16.523,0-24.908c-1.823,0-3.557,0-5.351,0C13.118,22.137,13.118,19.333,13.118,16.353z"/>
                    </svg>
                </a>
                <a
                    className="social-button"
                    href="https://www.linkedin.com/pub/afika-nyati/103/910/6b7"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="linkedin-icon"
                        x="0px"
                        y="0px"
                        width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                        <rect x="0.781" y="16.603" fill="#FFFFFF" width="10.39" height="33.397"/>
                    	<path fill="#FFFFFF" d="M5.979,12.036c-3.336,0-6.022-2.697-6.022-6.02C-0.043,2.698,2.644,0,5.979,0
                    		c3.32,0,6.016,2.698,6.016,6.016C11.995,9.34,9.3,12.036,5.979,12.036z"/>
                    	<path fill="#FFFFFF" d="M50.043,50H39.671V33.76c0-3.873-0.074-8.856-5.394-8.856c-5.403,0-6.227,4.218-6.227,8.575V50H17.683
                    		V16.603h9.95v4.563h0.142c1.384-2.626,4.773-5.394,9.823-5.394c10.502,0,12.445,6.915,12.445,15.91V50z"/>
                    </svg>
                </a>
                <a
                    className="social-button"
                    href="https://medium.com/@afikanyati/"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="medium-icon"
                        x="0px"
                        y="0px"
                        width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                         <path fill="#FFFFFF" d="M49.847,11.584c-0.01-0.008-0.018-0.017-0.029-0.023l-0.017-0.009L34.718,4.01
                             c-0.102-0.051-0.209-0.086-0.317-0.113c-0.136-0.035-0.275-0.056-0.415-0.056c-0.578,0-1.153,0.29-1.464,0.796l-8.684,14.111
                             l10.897,17.708l15.158-24.631C49.944,11.743,49.92,11.641,49.847,11.584z"/>
                         <polygon fill="#FFFFFF" points="19.056,15.533 19.056,31.596 33.333,38.735 	"/>
                         <path fill="#FFFFFF" d="M35.478,39.807l11.753,5.876C48.76,46.448,50,45.913,50,44.488V16.21L35.478,39.807z"/>
                         <path fill="#FFFFFF" d="M16.577,11.607L1.846,4.241C1.58,4.108,1.327,4.045,1.098,4.045C0.452,4.045,0,4.544,0,5.382v31.805
                             c0,0.851,0.623,1.86,1.385,2.24l12.975,6.487c0.333,0.166,0.649,0.245,0.936,0.245c0.806,0,1.372-0.624,1.372-1.671V11.752
                             C16.667,11.69,16.632,11.634,16.577,11.607z"/>
                    </svg>
                </a>
                <a
                    className="social-button"
                    href="https://twitter.com/afikanyati"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="twitter-icon"
                        x="0px"
                        y="0px"
                    	width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                        <path fill="#FFFFFF" d="M48.658,5.436c-0.805,2.392-2.278,4.241-4.396,5.59c0.244,0.061,1.759-0.225,2.914-0.542
                        	c0.961-0.263,1.896-0.601,2.824-0.98c-0.669,1.037-1.442,1.986-2.295,2.871c-0.853,0.884-1.779,1.686-2.766,2.402
                        	c0,0.214-0.006,0.416,0.001,0.617c0.034,0.979-0.002,1.956-0.081,2.932c-0.317,3.893-1.378,7.578-3.118,11.068
                        	c-1.62,3.248-3.747,6.122-6.424,8.579c-3.292,3.022-7.098,5.12-11.405,6.308c-1.39,0.383-2.803,0.654-4.234,0.833
                        	c-1.745,0.219-3.497,0.292-5.252,0.212c-5.141-0.234-9.896-1.723-14.26-4.452C0.108,40.837,0.051,40.799,0,40.752
                        	c6.911,0.756,12.263-1.951,15.106-4.26c-2.836-0.124-5.242-1.175-7.2-3.205c-1.08-1.12-1.851-2.43-2.346-3.948
                        	c1.541,0.283,3.045,0.241,4.533-0.166c-2.71-0.644-4.867-2.089-6.42-4.402c-1.17-1.743-1.721-3.678-1.716-5.812
                        	c0.726,0.385,1.453,0.696,2.219,0.908c0.768,0.213,1.549,0.343,2.38,0.369c-2.886-2.108-4.44-4.902-4.509-8.465
                        	C2.011,9.907,2.492,8.166,3.435,6.529c3.851,4.631,8.618,7.844,14.369,9.57c2.211,0.664,4.473,1.044,6.801,1.157
                        	c-0.026-0.145-0.046-0.265-0.069-0.384c-0.196-1.026-0.237-2.057-0.119-3.095c0.216-1.912,0.906-3.636,2.092-5.148
                        	c1.587-2.024,3.646-3.307,6.175-3.795c3.424-0.661,6.846,0.412,9.295,2.898c0.123,0.125,0.228,0.149,0.391,0.114
                        	c2.145-0.459,4.171-1.227,6.071-2.323c0.051-0.029,0.102-0.059,0.154-0.086C48.603,5.432,48.617,5.436,48.658,5.436z"/>
                    </svg>
                </a>
                <a
                    className="social-button"
                    href="https://instagram.com/afikanyati/"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="instagram-icon"
                        x="0px"
                        y="0px"
                        width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                        <path fill="#FFFFFF" d="M46.716,44.782c-1.651,1.959-3.677,3.35-6.122,4.151c-1.826,0.598-3.699,0.834-5.602,0.896
                            c-6.608,0.218-13.216,0.222-19.826,0.041c-3.052-0.083-5.996-0.657-8.658-2.173c-1.411-0.804-2.567-1.966-3.553-3.309
                            c-1.431-1.95-2.258-4.164-2.611-6.475c-0.333-2.182-0.351-4.428-0.333-6.654c0.002-0.283-0.017-0.567-0.026-0.851
                            c0.022-4.385,0.018-8.769,0.076-13.152c0.03-2.287,0.06-4.585,0.662-6.819C2.217,4.891,5.858,1.64,11.441,0.521
                            c2.515-0.504,5.079-0.457,7.628-0.477c5.278-0.041,10.556-0.107,15.833,0.105c2.23,0.09,4.436,0.334,6.522,1.193
                            c4.626,1.905,7.194,5.442,8.09,10.281c0.399,2.154,0.391,4.34,0.432,6.519c0.104,5.408,0.097,10.817-0.063,16.225
                            c-0.042,1.438-0.144,2.874-0.426,4.29c-0.437,2.193-1.28,4.206-2.635,5.993c-0.021,0.012-0.035,0.03-0.043,0.053
                            C46.747,44.721,46.726,44.747,46.716,44.782z M45.193,35.541c0.244-0.27,0.2-0.607,0.214-0.929
                            c0.187-4.471,0.164-8.944,0.107-13.416c-0.04-3.081,0.102-6.173-0.541-9.233c-0.299-1.423-0.776-2.716-1.656-3.853
                            c-1.774-2.293-4.26-3.169-7.026-3.4c-3.308-0.276-6.626-0.247-9.942-0.243c-4.145,0.004-8.292-0.08-12.43,0.222
                            c-5.569,0.405-8.659,3.39-9.197,8.93c-0.364,3.74-0.255,7.496-0.231,11.247c-0.005,1.178-0.023,2.355-0.013,3.533
                            c0.026,3.028-0.067,6.064,0.372,9.07c0.223,1.527,0.72,2.969,1.682,4.228c1.805,2.362,4.305,3.309,7.144,3.543
                            c3.219,0.266,6.449,0.247,9.677,0.246c4.121-0.001,8.245,0.076,12.362-0.186c2.384-0.152,4.64-0.695,6.502-2.302
                            C44.493,41.033,45.046,38.364,45.193,35.541z"/>
                        <path fill="#FFFFFF" d="M36.745,30.19c-3.406,7.173-11.851,9.75-18.512,5.704c-1.863-1.132-3.216-2.676-4.354-4.485
                            c-1.561-2.481-1.847-5.207-1.667-8.037c0.174-0.681,0.231-1.378,0.46-2.061c0.595-1.773,1.473-3.355,2.682-4.781
                            c3.891-4.587,10.574-5.446,15.26-3.054c2.619,1.337,4.629,3.275,5.918,5.942c1.233,2.551,1.614,5.564,0.96,8.39
                            C37.301,28.627,37.001,29.398,36.745,30.19z M16.76,23.653c-0.167,0.859-0.167,1.719-0.01,2.579
                            c0.118,1.33,0.626,2.534,1.399,3.581c3.203,4.345,9.411,4.751,12.975,0.747c1.253-1.407,2.069-2.936,2.038-4.853
                            c0.209-0.448,0.174-0.93,0.14-1.395c-0.165-2.28-1.189-4.086-2.897-5.614c-1.55-1.387-3.327-2.072-5.339-2.052
                            c-3.702,0.037-6.292,1.861-7.844,5.198C16.942,22.416,17.011,23.075,16.76,23.653z"/>
                        <path fill="#FFFFFF" d="M38.329,8.749c1.723,0,2.986,1.251,2.96,2.952c-0.029,1.876-1.478,3.027-3.035,3.016
                            c-1.427-0.01-2.894-1.167-2.929-3.061C35.3,10.244,36.575,8.575,38.329,8.749z"/>
                    </svg>
                </a>
                <a
                    className="social-button"
                    href="mailto:afika.a.nyati@gmail.com"
                    target="_blank">
                    <svg
                        version="1.1"
                        id="message-icon"
                        x="0px"
                        y="0px"
                    	width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                        enable-background="new 0 0 50 50">
                        <path fill="#FFFFFF" d="M44.903,5.096H5.096c-2.737,0-4.951,2.239-4.951,4.976L0.12,39.929c0,2.737,2.239,4.976,4.976,4.976h39.809
                        	c2.737,0,4.976-2.239,4.976-4.976V10.072C49.88,7.335,47.64,5.096,44.903,5.096z M44.903,39.928H5.096v-24.88L25,27.488
                        	l19.904-12.44V39.928z M25,22.512L5.096,10.072h39.809L25,22.512z"/>
                    </svg>
                </a>
            </div>
        );
    }

    componentDidMount() {
        console.log("+++++SocialBar");
    }

    componentWillReceiveProps(nextProps) {
        //pass
    }

    // ========== Methods ===========

}

// ============= PropTypes ==============

SocialBar.propTypes = {
    navIsOpen: PropTypes.bool.isRequired,
    contactIsOpen: PropTypes.bool.isRequired
};
