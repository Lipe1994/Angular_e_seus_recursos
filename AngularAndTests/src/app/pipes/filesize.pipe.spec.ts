import { FilesizePipe } from "./filesize.pipe"
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/* Testes unitarios */
describe('FileSizePipe', ()=> {
    
    describe('Teste unitario', ()=> {
        const pipe = new FilesizePipe();

        it('Deve converter bytes em MB', ()=> {
            expect(pipe.transform(123456789)).toBe('117.74MB');
            expect(pipe.transform(987654321)).toBe('941.90MB');
        });

        it('Deve converter bytes para GB', ()=> {
            expect(pipe.transform(1342177280)).toBe('1.25GB')
        });
    });

    /* Testes comportamental */
    describe('Teste comportamental', ()=> {
        
        @Component({
            template: `Tamanho: {{tamanho | filesize}}`
        })
        class TestComponent{
            tamanho = 123456789;
        }

        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;
        let el: HTMLElement;
        
        beforeEach(()=> {
            TestBed.configureTestingModule({
                declarations: [
                    FilesizePipe,
                    TestComponent
                ]
            });

            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            el = fixture.nativeElement;
        });

        it('Deve converter bytes em MB', ()=> {
            fixture.detectChanges();
            expect(el.textContent).toContain('Tamanho: 117.74MB');
        })

        it('Deve converter bytes para GB', ()=> {
            fixture.detectChanges();
            component.tamanho = 987654321;
            fixture.detectChanges();
            expect(el.textContent).toContain('Tamanho: 941.90MB');
        });
    })

})