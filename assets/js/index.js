document.addEventListener("DOMContentLoaded", function () {

    // List countries
    var countries = [{
            code: 'AF',
            name: 'Afghanistan'
        },
        {
            code: 'AL',
            name: 'Albania'
        },
        {
            code: 'DZ',
            name: 'Algeria'
        },
        {
            code: 'AD',
            name: 'Andorra'
        },
        {
            code: 'AO',
            name: 'Angola'
        },
        {
            code: 'AI',
            name: 'Anguilla'
        },
        {
            code: 'AQ',
            name: 'Antarctica'
        },
        {
            code: 'AG',
            name: 'Antigua and Barbuda'
        },
        {
            code: 'AR',
            name: 'Argentina'
        },
        {
            code: 'AM',
            name: 'Armenia'
        },
        {
            code: 'AW',
            name: 'Aruba'
        },
        {
            code: 'AU',
            name: 'Australia'
        },
        {
            code: 'AT',
            name: 'Austria'
        },
        {
            code: 'AZ',
            name: 'Azerbaijan'
        },
        {
            code: 'BS',
            name: 'Bahamas'
        },
        {
            code: 'BH',
            name: 'Bahrain'
        },
        {
            code: 'BD',
            name: 'Bangladesh'
        },
        {
            code: 'BB',
            name: 'Barbados'
        },
        {
            code: 'BY',
            name: 'Belarus'
        },
        {
            code: 'BE',
            name: 'Belgium'
        },
        {
            code: 'BZ',
            name: 'Belize'
        },
        {
            code: 'BJ',
            name: 'Benin'
        },
        {
            code: 'BM',
            name: 'Bermuda'
        },
        {
            code: 'BT',
            name: 'Bhutan'
        },
        {
            code: 'BO',
            name: 'Bolivia'
        },
        {
            code: 'BQ',
            name: 'Bonaire, Sint Eustatius and Saba'
        },
        {
            code: 'BA',
            name: 'Bosnia and Herzegovina'
        },
        {
            code: 'BW',
            name: 'Botswana'
        },
        {
            code: 'BV',
            name: 'Bouvet Island'
        },
        {
            code: 'BR',
            name: 'Brazil'
        },
        {
            code: 'IO',
            name: 'British Indian Ocean Territory'
        },
        {
            code: 'BN',
            name: 'Brunei Darussalam'
        },
        {
            code: 'BG',
            name: 'Bulgaria'
        },
        {
            code: 'BF',
            name: 'Burkina Faso'
        },
        {
            code: 'BI',
            name: 'Burundi'
        },
        {
            code: 'KH',
            name: 'Cambodia'
        },
        {
            code: 'CM',
            name: 'Cameroon'
        },
        {
            code: 'CA',
            name: 'Canada'
        },
        {
            code: 'CV',
            name: 'Cape Verde'
        },
        {
            code: 'KY',
            name: 'Cayman Islands'
        },
        {
            code: 'CF',
            name: 'Central African Republic'
        },
        {
            code: 'TD',
            name: 'Chad'
        },
        {
            code: 'CL',
            name: 'Chile'
        },
        {
            code: 'CN',
            name: 'China'
        },
        {
            code: 'CX',
            name: 'Christmas Island'
        },
        {
            code: 'CC',
            name: 'Cocos (Keeling) Islands'
        },
        {
            code: 'CO',
            name: 'Colombia'
        },
        {
            code: 'KM',
            name: 'Comoros'
        },
        {
            code: 'CG',
            name: 'Congo'
        },
        {
            code: 'CD',
            name: 'Congo, the Democratic Republic of the'
        },
        {
            code: 'CK',
            name: 'Cook Islands'
        },
        {
            code: 'CR',
            name: 'Costa Rica'
        },
        {
            code: 'CI',
            name: 'Côte d Ivoire'
        }, {
            code: 'HR',
            name: 'Croatia'
        },
        {
            code: 'CU',
            name: 'Cuba'
        },
        {
            code: 'CW',
            name: 'Curaçao'
        },
        {
            code: 'CY',
            name: 'Cyprus'
        },
        {
            code: 'CZ',
            name: 'Czech Republic'
        },
        {
            code: 'DK',
            name: 'Denmark'
        },
        {
            code: 'DJ',
            name: 'Djibouti'
        },
        {
            code: 'DM',
            name: 'Dominica'
        },
        {
            code: 'DO',
            name: 'Dominican Republic'
        },
        {
            code: 'EC',
            name: 'Ecuador'
        },
        {
            code: 'EG',
            name: 'Egypt'
        },
        {
            code: 'SV',
            name: 'El Salvador'
        },
        {
            code: 'GQ',
            name: 'Equatorial Guinea'
        },
        {
            code: 'ER',
            name: 'Eritrea'
        },
        {
            code: 'EE',
            name: 'Estonia'
        },
        {
            code: 'ET',
            name: 'Ethiopia'
        },
        {
            code: 'FK',
            name: 'Falkland Islands (Malvinas)'
        },
        {
            code: 'FO',
            name: 'Faroe Islands'
        },
        {
            code: 'FJ',
            name: 'Fiji'
        },
        {
            code: 'FI',
            name: 'Finland'
        },
        {
            code: 'FR',
            name: 'France'
        },
        {
            code: 'GF',
            name: 'French Guiana'
        },
        {
            code: 'PF',
            name: 'French Polynesia'
        },
        {
            code: 'TF',
            name: 'French Southern Territories'
        },
        {
            code: 'GA',
            name: 'Gabon'
        },
        {
            code: 'GM',
            name: 'Gambia'
        },
        {
            code: 'GE',
            name: 'Georgia'
        },
        {
            code: 'DE',
            name: 'Germany'
        },
        {
            code: 'GH',
            name: 'Ghana'
        },
        {
            code: 'GI',
            name: 'Gibraltar'
        },
        {
            code: 'GR',
            name: 'Greece'
        },
        {
            code: 'GL',
            name: 'Greenland'
        },
        {
            code: 'GD',
            name: 'Grenada'
        },
        {
            code: 'GP',
            name: 'Guadeloupe'
        },
        {
            code: 'GU',
            name: 'Guam'
        },
        {
            code: 'GT',
            name: 'Guatemala'
        },
        {
            code: 'GG',
            name: 'Guernsey'
        },
        {
            code: 'GN',
            name: 'Guinea'
        },
        {
            code: 'GW',
            name: 'Guinea-Bissau'
        },
        {
            code: 'GY',
            name: 'Guyana'
        },
        {
            code: 'HT',
            name: 'Haiti'
        },
        {
            code: 'HM',
            name: 'Heard Island and McDonald Islands'
        },
        {
            code: 'VA',
            name: 'Holy See (Vatican City State)'
        },
        {
            code: 'HN',
            name: 'Honduras'
        },
        {
            code: 'HK',
            name: 'Hong Kong'
        },
        {
            code: 'HU',
            name: 'Hungary'
        },
        {
            code: 'IS',
            name: 'Iceland'
        },
        {
            code: 'IN',
            name: 'India'
        },
        {
            code: 'ID',
            name: 'Indonesia'
        },
        {
            code: 'IR',
            name: 'Iran, Islamic Republic of'
        },
        {
            code: 'IQ',
            name: 'Iraq'
        },
        {
            code: 'IE',
            name: 'Ireland'
        },
        {
            code: 'IM',
            name: 'Isle of Man'
        },
        {
            code: 'IL',
            name: 'Israel'
        },
        {
            code: 'IT',
            name: 'Italy'
        },
        {
            code: 'JM',
            name: 'Jamaica'
        },
        {
            code: 'JP',
            name: 'Japan'
        },
        {
            code: 'JE',
            name: 'Jersey'
        },
        {
            code: 'JO',
            name: 'Jordan'
        },
        {
            code: 'KZ',
            name: 'Kazakhstan'
        },
        {
            code: 'KE',
            name: 'Kenya'
        },
        {
            code: 'KI',
            name: 'Kiribati'
        },
        {
            code: 'KP',
            name: "Korea, Democratic People's Republic of"
        },
        {
            code: 'KR',
            name: 'Korea, Republic of'
        },
        {
            code: 'KW',
            name: 'Kuwait'
        },
        {
            code: 'KG',
            name: 'Kyrgyzstan'
        },
        {
            code: 'LA',
            name: "Lao People's Democratic Republic"
        },
        {
            code: 'LV',
            name: 'Latvia'
        },
        {
            code: 'LB',
            name: 'Lebanon'
        },
        {
            code: 'LS',
            name: 'Lesotho'
        },
        {
            code: 'LR',
            name: 'Liberia'
        },
        {
            code: 'LY',
            name: 'Libya'
        },
        {
            code: 'LI',
            name: 'Liechtenstein'
        },
        {
            code: 'LT',
            name: 'Lithuania'
        },
        {
            code: 'LU',
            name: 'Luxembourg'
        },
        {
            code: 'MO',
            name: 'Macao'
        },
        {
            code: 'MK',
            name: 'Macedonia, the Former Yugoslav Republic of'
        },
        {
            code: 'MG',
            name: 'Madagascar'
        },
        {
            code: 'MW',
            name: 'Malawi'
        },
        {
            code: 'MY',
            name: 'Malaysia'
        },
        {
            code: 'MV',
            name: 'Maldives'
        },
        {
            code: 'ML',
            name: 'Mali'
        },
        {
            code: 'MT',
            name: 'Malta'
        },
        {
            code: 'MH',
            name: 'Marshall Islands'
        },
        {
            code: 'MQ',
            name: 'Martinique'
        },
        {
            code: 'MR',
            name: 'Mauritania'
        },
        {
            code: 'MU',
            name: 'Mauritius'
        },
        {
            code: 'YT',
            name: 'Mayotte'
        },
        {
            code: 'MX',
            name: 'Mexico'
        },
        {
            code: 'FM',
            name: 'Micronesia, Federated States of'
        },
        {
            code: 'MD',
            name: 'Moldova, Republic of'
        },
        {
            code: 'MC',
            name: 'Monaco'
        },
        {
            code: 'MN',
            name: 'Mongolia'
        },
        {
            code: 'ME',
            name: 'Montenegro'
        },
        {
            code: 'MS',
            name: 'Montserrat'
        },
        {
            code: 'MA',
            name: 'Morocco'
        },
        {
            code: 'MZ',
            name: 'Mozambique'
        },
        {
            code: 'MM',
            name: 'Myanmar'
        },
        {
            code: 'NA',
            name: 'Namibia'
        },
        {
            code: 'NR',
            name: 'Nauru'
        },
        {
            code: 'NP',
            name: 'Nepal'
        },
        {
            code: 'NL',
            name: 'Netherlands'
        },
        {
            code: 'NC',
            name: 'New Caledonia'
        },
        {
            code: 'NZ',
            name: 'New Zealand'
        },
        {
            code: 'NI',
            name: 'Nicaragua'
        },
        {
            code: 'NE',
            name: 'Niger'
        },
        {
            code: 'NG',
            name: 'Nigeria'
        },
        {
            code: 'NU',
            name: 'Niue'
        },
        {
            code: 'NF',
            name: 'Norfolk Island'
        },
        {
            code: 'MP',
            name: 'Northern Mariana Islands'
        },
        {
            code: 'NO',
            name: 'Norway'
        },
        {
            code: 'OM',
            name: 'Oman'
        },
        {
            code: 'PK',
            name: 'Pakistan'
        },
        {
            code: 'PW',
            name: 'Palau'
        },
        {
            code: 'PS',
            name: 'Palestine, State of'
        },
        {
            code: 'PA',
            name: 'Panama'
        },
        {
            code: 'PG',
            name: 'Papua New Guinea'
        },
        {
            code: 'PY',
            name: 'Paraguay'
        },
        {
            code: 'PE',
            name: 'Peru'
        },
        {
            code: 'PH',
            name: 'Philippines'
        },
        {
            code: 'PN',
            name: 'Pitcairn'
        },
        {
            code: 'PL',
            name: 'Poland'
        },
        {
            code: 'PT',
            name: 'Portugal'
        },
        {
            code: 'PR',
            name: 'Puerto Rico'
        },
        {
            code: 'QA',
            name: 'Qatar'
        },
        {
            code: 'RE',
            name: 'Réunion'
        },
        {
            code: 'RO',
            name: 'Romania'
        },
        {
            code: 'RU',
            name: 'Russian Federation'
        },
        {
            code: 'RW',
            name: 'Rwanda'
        },
        {
            code: 'BL',
            name: 'Saint Barthélemy'
        },
        {
            code: 'SH',
            name: 'Saint Helena, Ascension and Tristan da Cunha'
        },
        {
            code: 'KN',
            name: 'Saint Kitts and Nevis'
        },
        {
            code: 'LC',
            name: 'Saint Lucia'
        },
        {
            code: 'MF',
            name: 'Saint Martin (French part)'
        },
        {
            code: 'PM',
            name: 'Saint Pierre and Miquelon'
        },
        {
            code: 'VC',
            name: 'Saint Vincent and the Grenadines'
        },
        {
            code: 'WS',
            name: 'Samoa'
        },
        {
            code: 'SM',
            name: 'San Marino'
        },
        {
            code: 'ST',
            name: 'Sao Tome and Principe'
        },
        {
            code: 'SA',
            name: 'Saudi Arabia'
        },
        {
            code: 'SN',
            name: 'Senegal'
        },
        {
            code: 'RS',
            name: 'Serbia'
        },
        {
            code: 'SC',
            name: 'Seychelles'
        },
        {
            code: 'SL',
            name: 'Sierra Leone'
        },
        {
            code: 'SG',
            name: 'Singapore'
        },
        {
            code: 'SX',
            name: 'Sint Maarten (Dutch part)'
        },
        {
            code: 'SK',
            name: 'Slovakia'
        },
        {
            code: 'SI',
            name: 'Slovenia'
        },
        {
            code: 'SB',
            name: 'Solomon Islands'
        },
        {
            code: 'SO',
            name: 'Somalia'
        },
        {
            code: 'ZA',
            name: 'South Africa'
        },
        {
            code: 'GS',
            name: 'South Georgia and the South Sandwich Islands'
        },
        {
            code: 'SS',
            name: 'South Sudan'
        },
        {
            code: 'ES',
            name: 'Spain'
        },
        {
            code: 'LK',
            name: 'Sri Lanka'
        },
        {
            code: 'SD',
            name: 'Sudan'
        },
        {
            code: 'SR',
            name: 'Suriname'
        },
        {
            code: 'SJ',
            name: 'Svalbard and Jan Mayen'
        },
        {
            code: 'SZ',
            name: 'Swaziland'
        },
        {
            code: 'SE',
            name: 'Sweden'
        },
        {
            code: 'CH',
            name: 'Switzerland'
        },
        {
            code: 'SY',
            name: 'Syrian Arab Republic'
        },
        {
            code: 'TW',
            name: 'Taiwan, Province of China'
        },
        {
            code: 'TJ',
            name: 'Tajikistan'
        },
        {
            code: 'TZ',
            name: 'Tanzania, United Republic of'
        },
        {
            code: 'TH',
            name: 'Thailand'
        },
        {
            code: 'TL',
            name: 'Timor-Leste'
        },
        {
            code: 'TG',
            name: 'Togo'
        },
        {
            code: 'TK',
            name: 'Tokelau'
        },
        {
            code: 'TO',
            name: 'Tonga'
        },
        {
            code: 'TT',
            name: 'Trinidad and Tobago'
        },
        {
            code: 'TN',
            name: 'Tunisia'
        },
        {
            code: 'TR',
            name: 'Turkey'
        },
        {
            code: 'TM',
            name: 'Turkmenistan'
        },
        {
            code: 'TC',
            name: 'Turks and Caicos Islands'
        },
        {
            code: 'TV',
            name: 'Tuvalu'
        },
        {
            code: 'UG',
            name: 'Uganda'
        },
        {
            code: 'UA',
            name: 'Ukraine'
        },
        {
            code: 'AE',
            name: 'United Arab Emirates'
        },
        {
            code: 'GB',
            name: 'United Kingdom'
        },
        {
            code: 'US',
            name: 'United States'
        },
        {
            code: 'UM',
            name: 'United States Minor Outlying Islands'
        },
        {
            code: 'UY',
            name: 'Uruguay'
        },
        {
            code: 'UZ',
            name: 'Uzbekistan'
        },
        {
            code: 'VU',
            name: 'Vanuatu'
        },
        {
            code: 'VE',
            name: 'Venezuela, Bolivarian Republic of'
        },
        {
            code: 'VN',
            name: 'Viet Nam'
        },
        {
            code: 'VG',
            name: 'Virgin Islands, British'
        },
        {
            code: 'VI',
            name: 'Virgin Islands, U.S.'
        },
        {
            code: 'WF',
            name: 'Wallis and Futuna'
        },
        {
            code: 'EH',
            name: 'Western Sahara'
        },
        {
            code: 'YE',
            name: 'Yemen'
        },
        {
            code: 'ZM',
            name: 'Zambia'
        },
        {
            code: 'ZW',
            name: 'Zimbabwe'
        }
    ];
    var countrySelect = document.getElementById('country');
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    }



    // Get references to the radio inputs and the Direct Debit fields container
    const creditCardRadio = document.getElementById('credit-card');
    const directDebitRadio = document.getElementById('direct-debit');
    const directDebitFields = document.getElementById('direct-debit-fields');

    // Add event listeners to the radio inputs
    creditCardRadio.addEventListener('change', function () {
        // If "Credit Card" is selected, hide the additional fields
        if (creditCardRadio.checked) {
            directDebitFields.style.display = 'none';
        }
    });

    directDebitRadio.addEventListener('change', function () {
        // If "Direct Debit" is selected, show the additional fields
        if (directDebitRadio.checked) {
            directDebitFields.style.display = 'block';
        }
    });
    // Function to hide the cookie banner
    function hideCookieBanner() {
        var cookieBanner = document.getElementById("cookie-banner");
        if (cookieBanner) {
            cookieBanner.style.display = "none";
        }
    }
    var acceptButton = document.getElementById("accept-cookies");

    // Add an event handler to the button
    if (acceptButton) {
        acceptButton.addEventListener("click", function () {
            // Hide the banner when clicking on "Accept".
            hideCookieBanner();
        });
    }


    const otherInput = document.getElementById("other");
    const otherAmountField = document.getElementById("other-amount-label");


    const selectorInputs = document.querySelectorAll('input[name="selector"]');
    selectorInputs.forEach((input) => {
        input.addEventListener("change", function () {
            if (!otherInput.checked) {
                otherAmountField.style.display = "none";
            }
        });
    });

    otherInput.addEventListener("change", function () {
        if (otherInput.checked) {
            otherAmountField.style.display = "block";
        } else {
            otherAmountField.style.display = "none";
        }
    });

    var oneOffRadio = document.getElementById("one-off");
    var monthlyRadio = document.getElementById("monthly");
    var monthlyAmountSection = document.getElementById("monthly-amount-label");


    oneOffRadio.addEventListener("change", function () {
        if (oneOffRadio.checked) {
            monthlyAmountSection.style.display = "none";
            var priceOptionsContainer = document.querySelector(".container-radio-btn");
            priceOptionsContainer.classList.remove("col-auto");
        } else {
            monthlyAmountSection.style.display = "block";
        }
    });

    monthlyRadio.addEventListener("change", function () {
        if (monthlyRadio.checked) {
            monthlyAmountSection.style.display = "block";
            var priceOptionsContainer = document.querySelector(".container-radio-btn");
            priceOptionsContainer.classList.add("col-auto");
        } else {
            monthlyAmountSection.style.display = "none";
        }
    });

    // Global variables
    var firstName = "";
    var lastName = "";
    var email = "";
    var houseNumber = "";
    var postalCode = "";
    var city = "";
    var privacyPolicy = "";
    var accountHolder = "";
    var sortCode = "";
    var accountNumber = "";
    var directDebit = "";
    var other = 0;
    var donationForm = document.querySelector('#form-donation');

    const extractData = () => {
        firstName = document.querySelector('#first-name').value.trim();
        lastName = document.querySelector('#last-name').value.trim();
        email = document.querySelector('#email').value.trim();
        houseNumber = document.querySelector('#house-number').value.trim();
        postalCode = document.querySelector('#postcode').value.trim();
        other = document.querySelector('#other-amount').value;
        otherText = document.querySelector('#other-amount').value.trim();
        city = document.querySelector('#city').value.trim();
        privacyPolicy = document.querySelector('#privacy-policy');
        accountHolder = document.querySelector('#account-holder-name').value.trim();
        sortCode = document.querySelector('#sort-code').value.trim();
        accountNumber = document.querySelector('#account-number').value.trim();
        directDebit = document.querySelector('#direct-debit-confirmation');
    }

    donationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default.

        extractData();

        var firstNameErrorSpan = document.querySelector('#first-name + span');
        var lastNameErrorSpan = document.querySelector('#last-name + span');
        var emailErrorSpan = document.querySelector('#email + span');
        var houseNumberErrorSpan = document.querySelector('#house-number + span');
        var postalCodeErrorSpan = document.querySelector('#postcode + span');
        var cityErrorSpan = document.querySelector('#city + span');
        var privacyPolicyErrorSpan = document.querySelector('#error-span-privacy');
        var directDebitErrorSpan = document.querySelector('#error-span-direct-debit');
        var accountHolderErrorSpan = document.querySelector('#account-holder-name + span');
        var sortCodeErrorSpan = document.querySelector('#sort-code + span');
        var accountNumberErrorSpan = document.querySelector('#account-number + span');
        var otherSpan = document.querySelector('#error-span-other');
        var paymentSpan = document.querySelector('#error-span-payment');


        // Validation for first name
        if (firstName.length <= 2) {
            firstNameErrorSpan.textContent = 'This field is required.';
        } else {
            firstNameErrorSpan.textContent = '';
        }

        // Validation for last name
        if (lastName.length <= 2) {
            lastNameErrorSpan.textContent = 'This field is required.';
        } else {
            lastNameErrorSpan.textContent = '';
        }

        // Validation for email
        if (email === "") {
            emailErrorSpan.textContent = 'This field is required.';
        } else {
            emailErrorSpan.textContent = '';
        }

        // Validation for house number
        if (houseNumber === "") {
            houseNumberErrorSpan.textContent = 'This field is required.';
        } else {
            houseNumberErrorSpan.textContent = '';
        }

        // Validation for postal code
        if (postalCode === "") {
            postalCodeErrorSpan.textContent = 'This field is required.';
        } else {
            postalCodeErrorSpan.textContent = '';
        }

        // Validation for city
        if (city === "") {
            cityErrorSpan.textContent = 'This field is required.';
        } else {
            cityErrorSpan.textContent = '';
        }

        // Validation for privacy policy checkbox
        if (!privacyPolicy.checked) {
            privacyPolicyErrorSpan.textContent = 'This field is required.';
        } else {
            privacyPolicyErrorSpan.textContent = '';
        }

        // Validation for direct debit confirmation checkbox
        if (!directDebit.checked) {
            directDebitErrorSpan.textContent = 'This field is required.';
        } else {
            directDebitErrorSpan.textContent = '';
        }

        // Validation for account holder
        if (accountHolder.length === 0) {
            accountHolderErrorSpan.textContent = 'This field is required.';
        } else {
            accountHolderErrorSpan.textContent = '';
        }

        // Validation for sort code
        if (sortCode.length === 0) {
            sortCodeErrorSpan.textContent = 'This field is required.';
        } else {
            sortCodeErrorSpan.textContent = '';
        }

        // Validation for account number
        if (accountNumber.length === 0) {
            accountNumberErrorSpan.textContent = 'This field is required.';
        } else {
            accountNumberErrorSpan.textContent = '';
        }

        // Validation for other amount
        if (otherText === "" || parseFloat(other) < 2) {
            otherSpan.textContent = 'You must enter at least £2.';
        } else {
            otherSpan.textContent = '';
        }
        // Validation for payment method
        var paymentMethodCredit = document.querySelector('#credit-card');
        var paymentMethodDirect = document.querySelector('#direct-debit');

        if (!paymentMethodCredit.checked && !paymentMethodDirect.checked) {
            paymentSpan.textContent = 'This field is required.';
            return false;
        } else {
            paymentSpan.textContent = '';
        }

        if (paymentMethodCredit.checked) {
            if (
                firstName.length <= 2 ||
                lastName.length <= 2 ||
                email === "" ||
                houseNumber === "" ||
                postalCode === "" ||
                city === "" ||
                !privacyPolicy.checked
            ) {
                return false;
            }
        }

        if (paymentMethodDirect.checked) {
            if (
                firstName.length <= 2 ||
                lastName.length <= 2 ||
                email === "" ||
                houseNumber === "" ||
                postalCode === "" ||
                city === "" ||
                !privacyPolicy.checked ||
                accountHolder.length === 0 ||
                sortCode.length === 0 ||
                accountNumber.length === 0 ||
                !directDebit.checked
            ) {
                return false;
            }
        }

        // If all validations pass, the form is submitted
        $('#successModal').modal('show');
    });
});