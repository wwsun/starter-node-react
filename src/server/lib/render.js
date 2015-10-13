'use strict';

import path from 'path';
import views from 'co-views';

export default views(path.resolve(__dirname, '../../client'), {
  map: {html: 'swig'}
});