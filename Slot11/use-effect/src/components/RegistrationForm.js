import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegistrationForm = () => {
    // State for form fields and validation
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isGenderValid, setIsGenderValid] = useState(true);
    const [isCountryValid, setIsCountryValid] = useState(true);
    const [isTermsValid, setIsTermsValid] = useState(true);
    const [nameError, setNameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [termsError, setTermsError] = useState(''); // Added missing state
    const [touched, setTouched] = useState({ name: false, gender: false, country: false, terms: false });

    // Validation functions
    const validateName = (name) => {
        return name.trim().length >= 3;
    };

    const validateGender = (gender) => {
        return gender !== '';
    };

    const validateCountry = (country) => {
        return country !== '';
    };

    const validateTerms = (termsAgreed) => {
        return termsAgreed;
    };

    // Handle input changes and track touch state
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setTouched({ ...touched, name: true });
    };

    const handleGenderChange = (e) => {
        const value = e.target.value;
        setGender(value);
        setTouched({ ...touched, gender: true });
    };

    const handleCountryChange = (e) => {
        const value = e.target.value;
        setCountry(value);
        setTouched({ ...touched, country: true });
    };

    const handleTermsChange = (e) => {
        const value = e.target.checked;
        setTermsAgreed(value);
        setTouched({ ...touched, terms: true });
    };

    // UseEffect for validation
    useEffect(() => {
        // Validate name only if touched
        if (touched.name) {
            const valid = validateName(name);
            setIsNameValid(valid);
            setNameError(valid ? '' : 'Name must be at least 3 characters long!');
        }
        // Validate gender only if touched
        if (touched.gender) {
            const valid = validateGender(gender);
            setIsGenderValid(valid);
            setGenderError(valid ? '' : 'Please select a gender!');
        }
        // Validate country only if touched
        if (touched.country) {
            const valid = validateCountry(country);
            setIsCountryValid(valid);
            setCountryError(valid ? '' : 'Please select a country!');
        }
        // Validate terms only if touched
        if (touched.terms) {
            const valid = validateTerms(termsAgreed);
            setIsTermsValid(valid);
            setTermsError(valid ? '' : 'You must agree to the terms and conditions!'); // Fixed reference
        }
    }, [name, gender, country, termsAgreed, touched]);

    // Check if form is fully valid
    const isFormValid = isNameValid && isGenderValid && isCountryValid && isTermsValid && touched.name && touched.gender && touched.country && touched.terms;

    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    isInvalid={touched.name && !isNameValid}
                    isValid={touched.name && isNameValid}
                    placeholder="Enter name"
                />
                <Form.Control.Feedback type="invalid">
                    {nameError}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <div>
                    <Form.Check
                        inline
                        type="radio"
                        label="Male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                        isInvalid={touched.gender && !isGenderValid}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                        isInvalid={touched.gender && !isGenderValid}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Other"
                        value="other"
                        checked={gender === 'other'}
                        onChange={handleGenderChange}
                        isInvalid={touched.gender && !isGenderValid}
                    />
                </div>
                <Form.Control.Feedback type="invalid">
                    {genderError}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Select
                    value={country}
                    onChange={handleCountryChange}
                    isInvalid={touched.country && !isCountryValid}
                    isValid={touched.country && isCountryValid}
                >
                    <option value="">Select a country</option>
                    <option value="Da Nang">Da Nang</option>
                    <option value="Hanoi">Hanoi</option>
                    <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {countryError}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="terms">
                <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={termsAgreed}
                    onChange={handleTermsChange}
                    isInvalid={touched.terms && !isTermsValid}
                />
                <Form.Control.Feedback type="invalid">
                    {termsError} {/* Updated to use termsError */}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isFormValid}>
                Submit
            </Button>
        </Form>
    );
};

export default RegistrationForm;