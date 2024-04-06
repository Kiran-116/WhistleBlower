import { useState } from "react";
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

export default function HookForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("complaintTitle", data.complaintTitle);
      formData.append("departmentName", data.departmentName);
      formData.append("message", data.message);
      formData.append("fileUpload", data.fileUpload[0]); // assuming single file upload

      const response = await axios.post("/msg/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      // Handle response from backend if needed
      console.log("Response from backend:", response.data);

      // Reset form after successful submission
      setIsSubmitting(false);
    } catch (error) {
      // Handle errors if any
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Box style={{ width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
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

        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
