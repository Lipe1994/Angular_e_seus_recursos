import { Injectable } from "@angular/core";
import { CanLoad, CanActivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SecurityProductGuard implements CanLoad, CanActivate{

    permissions = {products: true};

    canLoad(): boolean{
        return this.permissions.products;
    }
    canActivate(): boolean{
        return this.permissions.products;
    }

}