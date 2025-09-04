import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

providers: [ importProvidersFrom(FormsModule) ]
