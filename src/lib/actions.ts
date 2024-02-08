'use server';

export async function submitPrompt(formData: FormData) {
    const rawFormData = {
        systemMessage: formData.get('systemMessage'),
        userMessage: formData.get('userMessage'),
      };
      // Test it out:
      console.log(rawFormData);
}