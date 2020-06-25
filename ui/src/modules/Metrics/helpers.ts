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

import { Option } from 'core/components/Form/Select/interfaces';
import map from 'lodash/map';

export const timestampFormater = (seconds: number) => {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) - hours * 60;

  if (hours > 0) return hours + ':' + minutes + ':' + (seconds % 60) + 'h';
  else if (minutes > 0) return minutes + ':' + (seconds % 60) + 'm';
  else if (seconds > 0) return (seconds % 60) + 's';
  else return 0;
};

export const normalizeCircleParams = (selectedCircles: Option[]) =>
  map(selectedCircles, 'value');
