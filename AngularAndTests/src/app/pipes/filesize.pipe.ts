import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filesize'
})
export class FilesizePipe implements PipeTransform{
    transform(bytes: number) {
        
        let valueFormated = bytes / (1024*1024)

        if(valueFormated > 1024){
            return (valueFormated / 1024).toFixed(2) + "GB"
        }else{
            return valueFormated.toFixed(2) + "MB"
        }
    }

}