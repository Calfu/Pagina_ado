from django.shortcuts import render, redirect
from .models import Perro
from .forms import PerroForm

# las clases genericas
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
# esta libreria nos permitira redireccionamiento
from django.urls import reverse_lazy



def listar_perros(request):
    # esto es un SELECT * FROM CARRERA
    perros = Perro.objects.all()
    # AHORA ESTAMOS LLEVANDO el listado de carreras
    # para desplegar en el template
    return render(request, "Registro/listar_perros.html", 
                  {'perros': perros})
    
def agregar_perro(request):
    if request.method == "POST":
        form = PerroForm(request.POST)
        if form.is_valid():
            model_instance = form.save(commit=False)
            model_instance.save()
            return redirect("/agregar_perro")
    else:
        form = PerroForm()
        return render(request, "Registro/agregar_perro.html", {'form': form})
 
def borrar_perro(request, perro_id):
    # Recuperamos la instancia de la carrera y la borramos
    instancia = Perro.objects.get(id=perro_id)
    instancia.delete()
 
    # Después redireccionamos de nuevo a la lista
    return redirect('listar_perros')
 
def editar_perro(request, perro_id):
    # Recuperamos la instancia de la carrera
    instancia = Perro.objects.get(id=perro_id)
    # Creamos el formulario con los datos de la instancia
    form = PerroForm(instance=instancia)
    # Comprobamos si se ha enviado el formulario
    if request.method == "POST":
        # Actualizamos el formulario con los datos recibidos
        form = PerroForm(request.POST, instance=instancia)
        # Si el formulario es válido...
        if form.is_valid():
            # Guardamos el formulario pero sin confirmarlo,
            # así conseguiremos una instancia para manipular antes de grabar
            instancia = form.save(commit=False)
            # Podemos guardar cuando queramos
            instancia.save()
 
    # Si llegamos al final renderizamos el formulario
    return render(request, "Registro/editar_perro.html", {'form': form})



#------------CLASES GENERICS-----------------------------------------------
# --Otra forma usando clases Generics -------
class PerroCreate(CreateView):
    model = Perro
    form_class = PerroForm
    template_name = 'Registro/perro_form.html'
    success_url = reverse_lazy("add_perro")

class PerroList(ListView):
    model = Perro
    template_name = 'Registro/list_perros.html'
    # paginate_by = 4

class PerroUpdate(UpdateView):
    model = Perro
    form_class = PerroForm
    template_name = 'Registro/perro_form.html'
    success_url = reverse_lazy('list_perros')

        

class PerroDelete(DeleteView):
    model = Perro
    template_name = 'Registro/perro_delete.html'
    success_url = reverse_lazy('list_perros')
 


 

    
    