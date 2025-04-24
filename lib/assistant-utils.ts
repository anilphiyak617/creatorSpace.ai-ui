interface AssistantResponse {
  branchName: string;
  assistantId: string;
  gitUrl: string;
  analysedBranches: string[];
  isAnalysed: boolean;
  taskId: string;
  projectName: string;
  created_at: string;
}

export function processAssistantIdResponse(
  response: AssistantResponse[],
  targetBranch: string
): AssistantResponse {
  if (response.length === 0) {
    return {
      branchName: '',
      assistantId: '',
      gitUrl: '',
      analysedBranches: [],
      isAnalysed: false,
      taskId: '',
      projectName: '',
      created_at: '',
    };
  }

  const matchingBranches = response.filter(item => item.branchName === targetBranch);

  if (matchingBranches.length === 0) {
    return response[response.length - 1];
  }

  return matchingBranches.reduce((latest, current) => 
    new Date(current.created_at) > new Date(latest.created_at) ? current : latest
  );
}
