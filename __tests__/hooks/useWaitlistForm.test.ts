import { act, renderHook } from "@testing-library/react"
import { mockApiCall } from "@/services/waitlist";
import {  useWaitlistForm  } from "../../hooks/useWaitlistForm"

jest.mock('@/services/waitlist', () => ({
  mockApiCall: jest.fn()
}));

describe("useWaitlistForm", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should initialize with empty form data and no errors", () => {
    const { result } = renderHook(() => useWaitlistForm())

    expect(result.current.formData).toEqual({
      name: "",
      email: "",
    })
    expect(result.current.errors).toEqual({})
    expect(result.current.submitStatus).toBe("idle")
  })

  it("should update form data on input change", () => {
    const { result } = renderHook(() => useWaitlistForm())

    act(() => {
      result.current.handleInputChange({
        target: { name: "name", value: "John Doe" },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.name).toBe("John Doe")
  })

  it("should validate name field correctly", async () => {
    const { result } = renderHook(() => useWaitlistForm())

    // Test empty name
    act(() => {
      result.current.handleInputChange({
        target: { name: "name", value: "" },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>)
    })
    expect(result.current.errors.name).toBe("Name is required")

    // Test name with special characters
    act(() => {
      result.current.handleInputChange({
        target: { name: "name", value: "John@Doe" },
      } as React.ChangeEvent<HTMLInputElement>)
    })
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>)
    })

    expect(result.current.errors.name).toBe("Name should not contain special characters")
  })

  it("should validate email field correctly",  async () => {
    const { result } = renderHook(() => useWaitlistForm())
    // Test empty email
    act(() => {
      result.current.handleInputChange({
        target: { name: "email", value: "" },
      } as React.ChangeEvent<HTMLInputElement>)
    })
    await act(async () => {
        await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>)
      })
  
    expect(result.current.errors.email).toBe("Email is required")

    // Test invalid email format
    act(() => {
      result.current.handleInputChange({
        target: { name: "email", value: "invalid-email" },
      } as React.ChangeEvent<HTMLInputElement>)
    })
    await act(async () => {
        await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>)
      })
  

    expect(result.current.errors.email).toBe("Invalid email format")
  })

  it("should handle successful form submission", async () => {
    const { result } = renderHook(() => useWaitlistForm());
    (mockApiCall as jest.Mock).mockResolvedValue(undefined)

    // mockApiCall.mockResolvedValueOnce(undefined);

    // Set valid form data
    act(() => {
      result.current.handleInputChange({
        target: { name: "name", value: "John Doe" },
      } as React.ChangeEvent<HTMLInputElement>)
      result.current.handleInputChange({
        target: { name: "email", value: "john@example.com" },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>)
    })

    expect(result.current.submitStatus).toBe("success")
    expect(result.current.formData).toEqual({ name: "", email: "" })
  })

    it('should handle failed form submission', async () => {
      const { result } = renderHook(() => useWaitlistForm());

      (mockApiCall  as jest.Mock).mockRejectedValue(new Error('Failed to submit'));

      // Set valid form data
      act(() => {
        result.current.handleInputChange({
          target: { name: 'name', value: 'John Doe' },
        } as React.ChangeEvent<HTMLInputElement>);
        result.current.handleInputChange({
          target: { name: 'email', value: 'john@example.com' },
        } as React.ChangeEvent<HTMLInputElement>);
      });

      await act(async () => {
        await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
      });

      expect(result.current.submitStatus).toBe('error');
    });
})
