import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReCAPTCHA } from 'react-google-recaptcha';

export default function MultiStepForm() {
  const [step, setStep] = useState(1); // Track current step
  const [states, setStates] = useState([]); // State options
  const [districts, setDistricts] = useState([]); // District options
  const [selectedState, setSelectedState] = useState(""); // Selected state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    // Fetch states data from API
    const fetchStates = async () => {
      try {
        const response = await axios.get("https://api.url/s tates"); // Replace with actual API URL
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    // Fetch districts data based on selected state from API
    const fetchDistricts = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(`https://api.url/districts/${selectedState}`); // Replace with actual API URL
          setDistricts(response.data);
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      }
    };

    fetchDistricts();
  }, [selectedState]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = async (data) => {
    if (!isRecaptchaVerified) {
      console.error("Please verify reCAPTCHA");
      return;
    }
  
    setIsSubmitting(true);
    try {
      // Submit data
      setIsSubmitting(false);
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "50%",
          justifyContent: "center",
          margin: "auto",
          border: "2px solid black",
          padding: "2rem",
          borderRadius: "1.5rem"
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bold" }}>Register Complaint</h1>
        <br />

        {step === 1 && (
          <>
            <FormControl isInvalid={errors.dateTime} mt={4}>
              <FormLabel htmlFor="dateTime">Approximate date & time of Incident/receiving/viewing of content</FormLabel>
              <Input
                id="dateTime"
                type="datetime-local"
                {...register("dateTime", {
                  required: "This is required"
                })}
              />
              <FormErrorMessage>
                {errors.dateTime && errors.dateTime.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.state} mt={4}>
              <FormLabel htmlFor="state">State / UTs</FormLabel>
              <Select
                id="state"
                placeholder="Select State / UTs"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">---Select---</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>{state.name}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.state && errors.state.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.district} mt={4}>
              <FormLabel htmlFor="district">District</FormLabel>
              <Select
                id="district"
                placeholder="Select District"
                {...register("district", {
                  required: "This is required"
                })}
              >
                <option value="">---Select---</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>{district.name}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.district && errors.district.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="teal" onClick={nextStep}>
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>

            <FormControl isInvalid={errors.complaintTitle}>
              <FormLabel htmlFor="complaintTitle">Complaint Title</FormLabel>
              <Input
                id="complaintTitle"
                placeholder="Complaint Title"
                {...register("complaintTitle", {
                  required: "This is required",
                  minLength: { value: 4, message: "Minimum length should be 4" }
                })}
              />
              <FormErrorMessage>
                {errors.complaintTitle && errors.complaintTitle.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.departmentName} mt={4}>
              <FormLabel htmlFor="departmentName">Department Name</FormLabel>
              <Select
                id="departmentName"
                placeholder="Select Department"
                {...register("departmentName", {
                  required: "Please select a department"
                })}
              >
                <option value="department1">Department 1</option>
                <option value="department2">Department 2</option>
                <option value="department3">Department 3</option>
              </Select>
              <FormErrorMessage>
                {errors.departmentName && errors.departmentName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message} mt={4}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                placeholder="Message"
                {...register("message", {
                  required: "This is required"
                })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="teal" onClick={prevStep}>
              Previous
            </Button>
            <Button mt={4} ml={4} colorScheme="teal" onClick={nextStep}>
              Next
            </Button>
          </>
        )}

        {step === 3 && (
          <>

            <FormControl isInvalid={errors.fileUpload} mt={4}>
              <FormLabel htmlFor="fileUpload">File Upload</FormLabel>
              <Input
                id="fileUpload"
                type="file"
                {...register("fileUpload", {
                  required: "This is required"
                })}
              />
              <FormErrorMessage>
                {errors.fileUpload && errors.fileUpload.message}
              </FormErrorMessage>
            </FormControl>

            {/* reCAPTCHA */}
            <ReCAPTCHA
              sitekey="https://recaptchaenterprise.googleapis.com/v1/projects/whistleblower-1712450873602/assessments?key=API_KEY"
              onChange={(value) => {
                setIsRecaptchaVerified(true);
                console.log("reCAPTCHA value:", value);
              }}
            />

            <Button mt={4} colorScheme="teal" onClick={prevStep}>
              Previous
            </Button>
            <Button mt={4} ml={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </>
        )}
      </form>
    </Box>
  );
}
