// Type Guards for JSON Validation:
// Problem: When working with dynamically typed data like JSON, ensuring its structure and type safety during parsing is crucial to avoid runtime errors.
// Solution: The type guard function (isRecord) and validation function (validateJsonObject) provide a robust mechanism for validating JSON objects, ensuring they adhere to a specific structure (Record<string, unknown>). This promotes type safety and enhances error handling, mitigating potential runtime issues during JSON parsing.

function isRecord(value: unknown): value is Record<string, unknown> {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}

type JsonValidationResult =
  | { success: true; data: Record<string, unknown> }
  | { success: false; error: Error };


export function validateJsonObject(json: string): JsonValidationResult {
  try {
	const parsedJSON: unknown = JSON.parse(json)
	if (!isRecord(parsedJSON)) {
  	return {
    	success: false,
    	error: new Error("The JSON string is not a valid object")
  	}
	}
	return {
  	success: true,
  	data: parsedJSON
	}
  } catch (e) {
	if (e instanceof Error) {
  	return {
    	success: false,
    	error: e
  	}
	}
	return {
  	success: false,
  	error: new Error("An unknown error occurred")
	}
  }
}
