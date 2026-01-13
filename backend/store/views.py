from django.http import JsonResponse

def home(request):
    data = {
        'message': 'Bem-vindo(a) à loja de comércio eletrônico!'
    }
    return JsonResponse(data)

# Create your views here.
