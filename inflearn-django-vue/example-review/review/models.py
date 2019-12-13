from django.db import models

# Create your models here.

# def image_path(instance, filename):
#     from random import choice
#     import string
#     arr = [choice(string.ascii_letters) for _ in range(8)]          #
#     pid = ''.join(arr)                                              # 8자리 임의의 문자를 만들어 파일명으로 지정
#     extension = filename.split('.')[-1]                             # 배열로 만들어 마지막 요소를 추출하여 파일확장자로 지정
#     return '%s/%s.%s' % (instance.owner.username, pid, extension)   # ex) MEDIA_ROOT/user_<id>/<random>

class Review(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images/')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    # def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
    #     if not self.author:
    #         self.author = 'GUEST'
    #     super().save()
