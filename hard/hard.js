function createPatient(name, ssn) {
    // Private object PII (Personally Identifiable Information)
    const PII = {
        name: name,
        SSN: ssn
    };

    // Public function to get the name property
    function getName() {
        return PII.name;
    }

    // Private function to get the SSN property
    function getSSN() {
        return PII.SSN;
    }

    // Return an object with only the public function accessible
    return {
        getName: getName,
        getSSN : getSSN
        // Note: We are not exposing getSSN here intentionally
    };
}

// Create a patient object
const patient2 = createPatient("John", "123-45-6789");



// Output: John
console.log(patient2.getName());

// Output: Undefined (as SSN property is not accessible directly)
console.log(patient2.getSSN());