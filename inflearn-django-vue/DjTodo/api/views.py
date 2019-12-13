import json

from django.forms import model_to_dict
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.views.generic import ListView, DeleteView
from django.views.generic.edit import BaseCreateView

from todo.models import Todo
from django.http import JsonResponse

@method_decorator(ensure_csrf_cookie, name='dispatch')
class ApiTodoLV(ListView):
    model = Todo
    # template_name =

    # def get(self, request, *args, **kwargs):
    #     tmpList = [
    #         { 'id': 1, 'name': 'd글쓴이1', 'todo': '내용1' },
    #         { 'id': 2, 'name': 'd글쓴이2', 'todo': '내용2' },
    #         { 'id': 3, 'name': 'd글쓴이3', 'todo': '내용3' },
    #     ]
    #     return JsonResponse(data=tmpList, safe=False)

    def render_to_response(self, context, **response_kwargs):
        todoList = list(context['object_list'].values())
        return JsonResponse(data=todoList, safe=False)

class ApiTodoDelV(DeleteView):
    model = Todo

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, status=204)

class ApiTodoCV(BaseCreateView):
    model = Todo
    fields = '__all__'

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['data'] = json.loads(self.request.body)
        return kwargs

    def form_valid(self, form):
        print('form_valid()', form)
        self.object = form.save()
        newTodo = model_to_dict(self.object)
        print(f"newTodo: {newTodo}")
        return JsonResponse(data=newTodo, status=201)

    def form_invalid(self, form):
        print('form_invalid()', form)
        print('form_invalid()', self.request.POST)
        print('form_invalid()', self.request.body.decode('utf8'))
        return JsonResponse(data=form.errors, status=400)

