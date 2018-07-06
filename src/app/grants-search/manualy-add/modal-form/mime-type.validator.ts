// import { AbstractControl } from '@angular/forms';
// import { Observable, Observer } from 'rxjs';

// export const mimeType = (control: AbstractControl): Promise<{[key: string]: any}> | Observable => {
//     const file = control.value as File;
//     const fileReader = new FileReader();
//     const frObs = Observable.create((observer: Observer) => {
//         fileReader.addEventListener('loadend', () => {
//             let isValid = false;
//             // const arr = new Uint8Array(fileReader.result).subarray(0, 4);
//             // let header = '';
//             // for (let i = 0; i < arr.length; i++) {
//             //     header += arr[i].toString(16);
//             // }
//             // switch (header)
//             if (isValid) {
//                 observer.next(null);
//             } else {
//                 observer.next({invalidMimeType: true});
//             }
//             observer.complete();
//         });
//         fileReader.readAsArrayBuffer(file);
//     });
// };
