import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list';
import { TodoService } from '../services/todo';
import { of } from 'rxjs';

describe('TodoListComponent', () => {
  //   let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TodoService', ['getAllTodos']);
    spy.getAllTodos.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [{ provide: TodoService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    // component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
  });

  it('should load todos on init', () => {
    fixture.detectChanges();
    expect(todoService.getAllTodos).toHaveBeenCalled();
  });
});
