import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Select,
  Box,
  Flex
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box style={{width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
        <h1 style={{ textAlign: "center", fontSize: '3rem', fontWeight: 'bold' }}>Register Complaint</h1>
        <br/>

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
