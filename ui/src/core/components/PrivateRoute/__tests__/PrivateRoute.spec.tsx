/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { render } from 'unit-test/testUtils';
import PrivateRoute from '../index';
import { MemoryRouter } from 'react-router-dom';
import { setAccessToken } from 'core/utils/auth';

const MockApp = () => <span data-testid="mock-component">mock app</span>

beforeAll(() => {
  setAccessToken('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUWVhieWtWSDNQLXhDMU5iTTZsQ2NJQ1BDbE54S0FMREZ4ZWNUcWZsNlFzIn0.eyJleHAiOjE1ODkzMjg2NDEsImlhdCI6MTU4OTMyNTA0MSwianRpIjoiZWMwYzZmODMtNzJlOC00YjAxLWE1NjctZTk2Mjg3Y2FlYzdkIiwiaXNzIjoiaHR0cHM6Ly9jaGFybGVzLWtleWNsb2FrLmNvbnRpbnVvdXNwbGF0Zm9ybS5jb20vYXV0aC9yZWFsbXMvZGFyd2luIiwiYXVkIjpbImRhcndpbi1jbGllbnQiLCJhY2NvdW50Il0sInN1YiI6IjJlNjIzYzE2LTNlMDctNDA4Yi04ODcwLTQ4YjkxZDZmZDY5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImRhcndpbi1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiZjU4ZGEwNzQtOGY1ZC00OGNiLTliYzktODM0MmNlMDBmZDcwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJtb292ZV9yZWFkIiwiY29uZmlnX3dyaXRlIiwiYWRtaW4iLCJjaXJjbGVfcmVhZCIsImNpcmNsZV93cml0ZSIsIm1vZHVsZV9yZWFkIiwiYnVpbGRfcmVhZCIsImRlcGxveV9yZWFkIiwiZGVwbG95X3dyaXRlIiwiYnVpbGRfd3JpdGUiLCJvZmZsaW5lX2FjY2VzcyIsImNvbmZpZ19yZWFkIiwibW9kdWxlX3dyaXRlIiwidW1hX2F1dGhvcml6YXRpb24iLCJtb292ZV93cml0ZSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc1Jvb3QiOnRydWUsIm5hbWUiOiJkYXJ3aW5hZG1pbiIsIndvcmtzcGFjZXMiOlt7ImlkIjoiOTI1MDdlYWYtOThjMS00OGViLTkzMGYtZWI2Y2YzZjA0MTMwIiwicGVybWlzc2lvbnMiOlsibWFpbnRlbmFuY2Vfd3JpdGUiLCJkZXBsb3lfd3JpdGUiLCJjaXJjbGVzX3JlYWQiLCJjaXJjbGVzX3dyaXRlIiwibW9kdWxlc19yZWFkIiwibW9kdWxlc193cml0ZSJdfSx7ImlkIjoiZTZmZWEzZDAtYjVjYi00OTIwLThjNjctZDNjNjc4MDEyZjRiIiwicGVybWlzc2lvbnMiOlsibWFpbnRlbmFuY2Vfd3JpdGUiLCJjaXJjbGVzX3dyaXRlIiwibW9kdWxlc193cml0ZSIsImh5cG90aGVzaXNfcmVhZCJdfSx7ImlkIjoiMGJjOTg2NTMtOTRkYy00OTRhLWJkZmYtOWQxN2Q0MTI3Yzg2IiwicGVybWlzc2lvbnMiOlsiaHlwb3RoZXNpc193cml0ZSIsIm1vZHVsZXNfcmVhZCIsIm1vZHVsZXNfd3JpdGUiLCJjaXJjbGVzX3JlYWQiLCJoeXBvdGhlc2lzX3JlYWQiLCJjaXJjbGVzX3dyaXRlIiwiZGVwbG95X3dyaXRlIl19XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFyd2luYWRtaW5AenVwLmNvbS5iciIsImdpdmVuX25hbWUiOiJkYXJ3aW5hZG1pbiIsImVtYWlsIjoiZGFyd2luYWRtaW5AenVwLmNvbS5iciJ9.FAAdXjA7T2zIcpxEIMe_Xk24DO415zmKqSWDLh4trJpj_b6ZtL1BBYId1d6fggylPUYhEqVWTrfEfMlc7p1KwWqgTSl5YzdOvi0OSuLkh9yHbLK2G26I5pIDmKWEBf7IaaWb0J2D_f-qKjQ9Mq9p9XrXlnGPPnk32EMtti4zt9SYvgBeGwR0g-6CVKiO_YNgCK8xAaaq7TRJfOb4nxpaPswNpUtG4A4BihiJcg0DsriqMOGSy2HmYPWSUW0kSi2DTGqLIuFyTrO7APZwBzsiSI0ObHzw9h8gbNK5PIYhXUtxnY-razcU7wtZgxWj0s08Q1cNZk8dwlEd1v6_b6Csvg');
});

test('render Private Route', () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/main']}>
      <PrivateRoute
        path="/main"
        component={MockApp}
        allowedRoles={['moove_write']}
      />
    </MemoryRouter>
  );

  expect(getByTestId('mock-component')).toBeInTheDocument();
});

test('render PrivateRoute without role', () => {
  const { queryByTestId } = render(
    <MemoryRouter initialEntries={['/main']}>
      <PrivateRoute
        path="/main"
        component={MockApp}
        allowedRoles={['']}
      />
    </MemoryRouter>
  );

  expect(queryByTestId('mock-component')).toBeInTheDocument();
});