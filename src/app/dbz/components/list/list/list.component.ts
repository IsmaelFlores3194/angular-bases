import { Character } from './../../../interfaces/character.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList : Character[] = [];


  @Output()
// public onDelete :  EventEmitter<number>  =  new EventEmitter();
public onDelete :  EventEmitter<string>  =  new EventEmitter();



  // onDeleteCharacter(index: number) : void {
  //   this.onDelete.emit( index );
  onDeleteCharacter(id?: string) : void {

    if(!id) return ;

    this.onDelete.emit( id );
  }









}

