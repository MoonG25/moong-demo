import json

from django.forms import model_to_dict
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.views.generic import ListView, DeleteView
from django.views.generic.edit import BaseCreateView

from review.models import Review
from django.http import JsonResponse

@method_decorator(ensure_csrf_cookie, name='dispatch')
class ApiReviewLV(ListView):
    model = Review

    def render_to_response(self, context, **response_kwargs):
        reviewList = list(context['object_list'].values())
        return JsonResponse(data=reviewList, safe=False)

class ApiReviewDelV(DeleteView):
    model = Review

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, status=204)

class ApiReviewCV(BaseCreateView):
    model = Review
    fields = '__all__'

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['data'] = json.loads(self.request.body)
        return kwargs

    def form_valid(self, form):
        print('form_valid()', form)
        self.object = form.save()
        newReview = model_to_dict(self.object)
        print(f"newReview: {newReview}")
        return JsonResponse(data=newReview, status=201)

    def form_invalid(self, form):
        print('form_invalid()', form)
        print('form_invalid()', self.request.POST)
        print('form_invalid()', self.request.body.decode('utf8'))
        return JsonResponse(data=form.errors, status=400)
