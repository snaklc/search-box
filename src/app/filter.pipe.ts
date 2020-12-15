import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   * @param {any[]} users
   * @param {string} name
   * @returns {any[]}
   */
  transform(users: any[], name: string): any[] {
    if (!users) {
      return [];
 
    }
    if (!name) {
      return users;
    }
    name = name.toLocaleLowerCase();

    return users.filter(item => {
      return item.toLocaleLowerCase().includes(name);
    });
  }
}