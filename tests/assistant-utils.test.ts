import { processAssistantIdResponse } from '../lib/assistant-utils';

describe('processAssistantIdResponse', () => {
  const mockResponse = [
    {
      branchName: 'main',
      assistantId: 'asst_123',
      gitUrl: 'https://github.com/user/repo',
      analysedBranches: ['main'],
      isAnalysed: true,
      taskId: 'task_123',
      projectName: 'Project A',
      created_at: '2023-05-01T10:00:00Z',
    },
    {
      branchName: 'feature',
      assistantId: 'asst_456',
      gitUrl: 'https://github.com/user/repo',
      analysedBranches: ['feature'],
      isAnalysed: true,
      taskId: 'task_456',
      projectName: 'Project A',
      created_at: '2023-05-02T10:00:00Z',
    },
    {
      branchName: 'main',
      assistantId: 'asst_789',
      gitUrl: 'https://github.com/user/repo',
      analysedBranches: ['main'],
      isAnalysed: true,
      taskId: 'task_789',
      projectName: 'Project A',
      created_at: '2023-05-03T10:00:00Z',
    },
  ];

  test('Empty Response Array', () => {
    const result = processAssistantIdResponse([], 'main');
    expect(result).toEqual({
      branchName: '',
      assistantId: '',
      gitUrl: '',
      analysedBranches: [],
      isAnalysed: false,
      taskId: '',
      projectName: '',
      created_at: '',
    });
  });

  test('No Matching Branch', () => {
    const result = processAssistantIdResponse(mockResponse, 'develop');
    expect(result).toEqual(mockResponse[mockResponse.length - 1]);
  });

  test('Multiple Items with Same Branch', () => {
    const result = processAssistantIdResponse(mockResponse, 'main');
    expect(result).toEqual(mockResponse[2]);
  });

  test('Mixed Branches', () => {
    const result = processAssistantIdResponse(mockResponse, 'feature');
    expect(result).toEqual(mockResponse[1]);
  });

  test('Verify all relevant fields', () => {
    const result = processAssistantIdResponse(mockResponse, 'main');
    expect(result).toHaveProperty('branchName', 'main');
    expect(result).toHaveProperty('assistantId', 'asst_789');
    expect(result).toHaveProperty('gitUrl', 'https://github.com/user/repo');
    expect(result).toHaveProperty('analysedBranches', ['main']);
    expect(result).toHaveProperty('isAnalysed', true);
    expect(result).toHaveProperty('taskId', 'task_789');
    expect(result).toHaveProperty('projectName', 'Project A');
    expect(result).toHaveProperty('created_at', '2023-05-03T10:00:00Z');
  });

  test('Error handling - malformed input data', () => {
    const malformedData: any = [{ invalidField: 'value' }];
    expect(() => processAssistantIdResponse(malformedData, 'main')).not.toThrow();
    const result = processAssistantIdResponse(malformedData, 'main');
    expect(result).toEqual(malformedData[0]);
  });
});
