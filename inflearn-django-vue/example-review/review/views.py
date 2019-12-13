from django.views.generic import CreateView, TemplateView
from django.views.generic.list import MultipleObjectMixin

from review.models import Review

from django.urls import reverse_lazy

# Create your views here.
class ReviewIndex(TemplateView):
    template_name = 'review/review_form_list.html'

class ReviewHome(MultipleObjectMixin, CreateView):
    model = Review
    fields = '__all__'
    template_name = 'review/review_form_list.html'
    success_url = reverse_lazy('review:home')

    def get(self, request, *args, **kwargs):
        self.object_list = self.get_queryset()
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        self.object_list = self.get_queryset()
        return super().post(request, *args, **kwargs)